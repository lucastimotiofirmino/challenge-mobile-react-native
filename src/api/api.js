import axios from 'axios';

const createApi = () => {
  const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public',
    timeout: 5000,
  });

  return api;
};

export default createApi();
