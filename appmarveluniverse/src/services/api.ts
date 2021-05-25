import axios from 'axios';
import { BASE_URL, PUBLIC_KEY } from '../config';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: PUBLIC_KEY,
    ts: 28,
    hash: '875fb96d0580038d4cbe7a2f433c521c', // MD5 generated using Marvel pattern (ts+privateKey+publicKey)
  },
  timeout: 10000,
});

export default api;
