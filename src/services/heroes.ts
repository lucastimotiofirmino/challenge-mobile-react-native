import Api from './api';
import { LoadHeroesResult } from '../redux/actions/heroes/types';
import { publicKey } from '../utils/constants';
import { timestamp, hashKey } from '../utils/helper';

export async function loadHeroes(
  offset: Number,
  filterByName: String,
): Promise<LoadHeroesResult> {
  const result: LoadHeroesResult = {
    error: null,
    data: [],
    payload: [],
    type: null,
  };
  const nameStartsWith = () => {
    if (filterByName && filterByName.length > 1) {
      return `&nameStartsWith=${filterByName}`;
    }
  };
  /* Marvel API request: https://stackoverflow.com/questions/28743530/
  you-must-provide-a-hash-error-when-using-api-to-download-data-in-r */
  await Api.get(
    `/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hashKey}&offset=${offset}${nameStartsWith()}`,
    //`/characters?apikey=${publicKey}&hash=${hashKey}&offset=${offset}`,
  )
    .then((response) => {
      const { data } = response.data;
      result.data = data.results;
      if (__DEV__) {
        console.log(result.data);
      }
    })
    .catch((error) => {
      if (__DEV__) {
        console.log(error.response);
      }
      result.error = error.message;
    });

  return result;
}
