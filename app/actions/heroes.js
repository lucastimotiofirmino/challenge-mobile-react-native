import request from '../common/request';

export const RESET_HEROES = 'RESET_HEROES';
export const FETCH_BATCH_HEROES = 'FETCH_BATCH_HEROES';
export const FETCH_HEROES_TOTAL = 'FETCH_HEROES_TOTAL';

export const resetHeroes = () => {
  return { type: RESET_HEROES };
};

export const fetchHeroes = ({ heroes }) => {
  return { type: FETCH_BATCH_HEROES, heroes };
};

export const fetchTotalAndReachEnd = ({ total, hasNext = true }) => {
  return { type: FETCH_HEROES_TOTAL, total, hasNext };
};

export const getHeroes = ({
  limit = 10,
  offset = 0,
  name = '',
  orderBy = 'name',
}) => {
  return (dispatch) => {
    if (offset <= 0) {
      dispatch(resetHeroes());
    }
    let params = [`orderBy=${orderBy}`, `limit=${limit}`, `offset=${offset}`];

    if (name !== '') params.push(`nameStartsWith=${name}`);

    if (params.length > 0) {
      params = params.join('&');
    }

    return request({ url: `/characters?${params}` })
      .then((response) => {
        const { total, results, count } = response.data.data;
        const hasNext = count >= limit;

        dispatch(fetchTotalAndReachEnd({ total, hasNext }));
        dispatch(fetchHeroes({ heroes: Object.values(results) }));
      })
      .catch((error) => {
        Promise.reject(
          new Error('Houve um erro ao carregar, tente fazer o refresh!'),
        );
      });
  };
};
