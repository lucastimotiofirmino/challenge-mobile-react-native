import axios from 'axios';
import { BASE_URL, TS, PUBLIC_KEY, HASH } from '../config';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: PUBLIC_KEY,
    ts: TS,
    hash: HASH, // MD5 generated using Marvel pattern (ts+privateKey+publicKey)
  },
  timeout: 10000,
});

export default api;
