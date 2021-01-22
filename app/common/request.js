import axios from 'axios';
import md5 from 'crypto-js/md5';

import { MARVEL_API_URL, MARVEL_API_PUBLIC, MARVEL_API_PRIVATE } from '@env';

export const axiosInstance = axios.create({
  baseURL: MARVEL_API_URL,
});

const JSON_HEADER = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export function makeRequestParams({ method, body }) {
  return {
    method,
    headers: {
      ...JSON_HEADER,
    },
    ...(body !== null && { data: JSON.stringify(body) }),
  };
}

export function makeApiHash({ timestamp, privateKey, publicKey }) {
  return md5(`${timestamp}${privateKey}${publicKey}`);
}

export function appendHashToUrl({ hash, publicKey, timestamp }) {
  return `&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
}

async function request({
  url,
  method = 'GET',
  body = null,
  timestamp = new Date().getTime(),
}) {
  const requestParams = makeRequestParams({
    method,
    body,
  });

  const hash = makeApiHash({
    timestamp,
    publicKey: MARVEL_API_PUBLIC,
    privateKey: MARVEL_API_PRIVATE,
  });

  const appendUrl = appendHashToUrl({
    timestamp,
    hash,
    publicKey: MARVEL_API_PUBLIC,
  });

  return axiosInstance
    .request({ url: `${url}${appendUrl}`, ...requestParams })
    .then((response) => response);
}

export default request;
