import axios, { Method } from 'axios';
import md5 from 'crypto-js/md5';

import { MARVEL_API_URL, MARVEL_API_PUBLIC, MARVEL_API_PRIVATE } from '@env';

export const axiosInstance = axios.create({
  baseURL: MARVEL_API_URL,
});

const JSON_HEADER = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export function makeRequestParams(method: Method) {
  return {
    method,
    headers: {
      ...JSON_HEADER,
    },
  };
}

export function makeApiHash(
  timestamp: number,
  privateKey: string,
  publicKey: string,
) {
  return md5(`${timestamp}${privateKey}${publicKey}`).toString();
}

export function appendHashToUrl(
  timestamp: number,
  publicKey: string,
  hash: string,
) {
  return `&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
}

interface IRequest {
  url: string;
  method?: Method;
  timestamp?: number;
}

async function request({
  url,
  method = 'GET',
  timestamp = new Date().getTime(),
}: IRequest) {
  const requestParams = makeRequestParams(method);
  const hash = makeApiHash(timestamp, MARVEL_API_PRIVATE, MARVEL_API_PUBLIC);
  const appendUrl = appendHashToUrl(timestamp, MARVEL_API_PUBLIC, hash);

  return axiosInstance
    .request({ url: `${url}${appendUrl}`, ...requestParams })
    .then((response) => response);
}

export default request;
