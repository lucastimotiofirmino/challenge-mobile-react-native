import api from '../api';

import { GET_CHARACTERS, MARVEL_API_PARAMS } from '~/constants/api';

export const getCharacters = async (name = null) => {
  let params = name ? `name=${name}&` : '';
  params = `${params}${MARVEL_API_PARAMS}`;

  const url = `${GET_CHARACTERS}?${params}`;

  const res = await api.get(url);
  console.tron.log('teste', res);
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
