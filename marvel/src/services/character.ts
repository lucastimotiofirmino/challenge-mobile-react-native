import api from './api';
import { timestamp, publicKey, hash } from '../utils/hash-api-generator';

export const loadCharacters = async (offset: number) => {
  try {
    const { data } = await api.get(
      `/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&offset=${offset}`,
    );

    console.log('DATA', data);
    return data;
  } catch (err) {
    throw err;
  }
};
