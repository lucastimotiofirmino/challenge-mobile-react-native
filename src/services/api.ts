import axios from 'axios';
import config from '../../config';
const {API_URL, TS, API_KEY, HASH} = config;

const api = axios.create({
  baseURL: API_URL,
  params: {
    apikey: API_KEY,
    ts: TS,
    hash: HASH,
  },
});

export default api;
