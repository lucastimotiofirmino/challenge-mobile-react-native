import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
});

export default Api;
