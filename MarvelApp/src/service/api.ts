import axios from 'axios';
import md5 from 'md5';

const privateAPI = '4c1fbc6d42f785d372832096987fc1f1d2072f09';
const publicAPI = '47bfa3c580505a1dbfad3fb91636a891';
const timestamp = new Date().getTime();

const api = axios.create({
  baseURL: 'https://gateway.marvel.com:443',
  params: {
    limit: '100',
    ts: new Date().getTime(),
    apikey: '47bfa3c580505a1dbfad3fb91636a891',
    hash: md5(timestamp + privateAPI + publicAPI),
  },
  timeout: 10000,
  method: 'get',
  responseType: 'json',
});

export default api;
