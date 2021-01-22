import axios from 'axios';
import md5 from 'crypto-js/md5';

import { MARVEL_API_URL, MARVEL_API_PUBLIC, MARVEL_API_PRIVATE } from '@env';

export function makeApiHash({ timestamp, privateKey, publicKey }) {
  return md5(`${timestamp}${privateKey}${publicKey}`);
}

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

async function request({ url, method = 'GET', body = null }) {
  const requestParams = makeRequestParams({
    method,
    body,
  });

  const timestamp = new Date().getTime();
  const hash = makeApiHash({
    timestamp,
    publicKey: MARVEL_API_PUBLIC,
    privateKey: MARVEL_API_PRIVATE,
  });
  const appendHashToUrl = `&ts=${timestamp}&apikey=${MARVEL_API_PUBLIC}&hash=${hash}`;

  const finalUrl = `${url}${appendHashToUrl}`;

  return axiosInstance
    .request({ url: finalUrl, ...requestParams })
    .then((response) => response);
}

export default request;
