import { IHero } from '../common/interfaces';
import request from '../common/request';
import {
  RESET_HEROES,
  FETCH_BATCH_HEROES,
  FETCH_HEROES_TOTAL,
} from '../types/heroes';

export const resetHeroes = () => {
  return { type: RESET_HEROES };
};

export const fetchHeroes = (heroes: IHero[]) => {
  return { type: FETCH_BATCH_HEROES, heroes };
};

export const fetchTotalAndReachEnd = (
  total: number,
  hasNext: boolean = true,
) => {
  return { type: FETCH_HEROES_TOTAL, total, hasNext };
};

export const getHeroes = ({
  limit = 10,
  offset = 0,
  name = '',
  orderBy = 'name',
}) => {
  return (dispatch: Function) => {
    if (offset <= 0) {
      dispatch(resetHeroes());
    }
    const params: string[] = [
      `orderBy=${orderBy}`,
      `limit=${limit}`,
      `offset=${offset}`,
    ];

    if (name !== '') {
      params.push(`nameStartsWith=${name}`);
    }

    const paramsConvertedToUrl: string =
      params.length > 0 ? params.join('&') : '';

    return request({ url: `/characters?${paramsConvertedToUrl}` })
      .then((response) => {
        const { total, results, count } = response.data.data;
        const hasNext = count >= limit;

        dispatch(fetchTotalAndReachEnd(total, hasNext));
        dispatch(fetchHeroes(Object.values(results)));
      })
      .catch(() => {
        Promise.reject(
          new Error('Houve um erro ao carregar, tente fazer o refresh!'),
        );
      });
  };
};
