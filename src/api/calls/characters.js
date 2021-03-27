import api from '../api';
import store from '~/store';
import { getCharacters as getCharactersAction } from '~/store/ducks/characters';

import { GET_CHARACTERS, MARVEL_API_PARAMS } from '~/constants/api';

export const getCharacters = async ({ name = null, length }) => {
  let params = name ? `name=${name}&` : '';
  params = `${params}${MARVEL_API_PARAMS}&offset=${length}`;

  const url = `${GET_CHARACTERS}?${params}`;

  const {
    data: {
      data: { results },
    },
  } = await api.get(url);

  const characters = results;

  store.dispatch(getCharactersAction(characters));
};

export const getEvents = async (name = null) => {
  let params = name ? `name=${name}&` : '';
  params = `${params}${MARVEL_API_PARAMS}`;

  const url = `${GET_CHARACTERS}?${params}`;

  const res = await api.get(url);
  console.tron.log('teste', res);
};

export const getSeries = async (name = null) => {
  let params = name ? `name=${name}&` : '';
  params = `${params}${MARVEL_API_PARAMS}`;

  const url = `${GET_CHARACTERS}?${params}`;

  const res = await api.get(url);
  console.tron.log('teste', res);
};
