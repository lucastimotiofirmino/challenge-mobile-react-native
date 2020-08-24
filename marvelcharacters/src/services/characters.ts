import Api from './api';
import {GetCharacterResult} from '../interfaces';
import {timestamp, publicKey, hash} from '../utils/hash-generator';

export async function loadCharacters(
  offset: Number,
): Promise<GetCharacterResult> {
  const result: GetCharacterResult = {
    error: null,
    data: [],
  };

  await Api.get(
    `/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&offset=${offset}`,
  )
    .then((response) => {
      const {data} = response.data;
      result.data = data.results;
    })
    .catch((error) => {
      console.log(error.response);
      result.error = error.message;
    });

  return result;
}
