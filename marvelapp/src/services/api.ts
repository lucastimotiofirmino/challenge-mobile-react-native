import axios from 'axios';
import { AxiosResponse } from 'axios';

const apikey = '1e229818860f7081c532e634d8f6ae65';
const hash = 'e02be810b65957f4b60b71ca89b8835f';
const ts = 1504796200286;

const BASE_URL = 'https://gateway.marvel.com:443/v1/public/characters';
const BASE_URL_COPY =
  'https://gateway.marvel.com:443/v1/public/characters?apikey=1e229818860f7081c532e634d8f6ae65&ts=1504796200286&hash=e02be810b65957f4b60b71ca89b8835f&offset=1&limit=10';
const Api = {
  loadCharacters: (offset: number, limit: number): Promise<AxiosResponse> =>
    axios.get(
      `${BASE_URL}?orderBy=name&apikey=${apikey}&ts=${ts}&hash=${hash}`,
      {
        params: { offset, limit },
      },
    ),

  detailCharacters: (characterId: number): Promise<AxiosResponse> =>
    axios.get(
      `${BASE_URL}/${characterId}?apikey=${apikey}&ts=${ts}&hash=${hash}`,
    ),

  searchCharacters: (name: string): Promise<AxiosResponse> =>
    axios.get(`${BASE_URL}?apikey=${apikey}&ts=${ts}&hash=${hash}`, {
      params: {
        name,
        // offset: 1,
        // limit: 10,
      },
    }),
};

export default Api;
