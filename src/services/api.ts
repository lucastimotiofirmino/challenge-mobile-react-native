import axios from 'axios';

const http = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  timeout: 10000,
});

const Api = {
  get: (path: string) => {
    return http.get(path);
  },
};

export default Api;
