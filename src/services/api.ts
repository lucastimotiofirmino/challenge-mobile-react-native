import axios from 'axios';

const api = axios.create({
  baseURL: 'developer.marvel.com',
});

export default api;
