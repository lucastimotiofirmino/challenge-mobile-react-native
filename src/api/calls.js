import api from './api';

import {
  GET_CHARACTERS,
  GET_EVENTS,
  GET_SERIES,
  MARVEL_API_PARAMS,
} from '~/constants/api';

export const getCharacters = async ({ name = null, length }) => {
  let params = name ? `nameStartsWith=${name}&` : '';
  params = `${params}${MARVEL_API_PARAMS}&offset=${length}`;

  const url = `${GET_CHARACTERS}?${params}`;

  const {
    data: {
      data: { results },
    },
  } = await api.get(url);

  const characters = results;

  return characters;
};

export const getEvents = async ({ name = null, length }) => {
  let params = name ? `nameStartsWith=${name}&` : '';
  params = `${params}${MARVEL_API_PARAMS}&offset=${length}`;

  const url = `${GET_EVENTS}?${params}`;

  const {
    data: {
      data: { results },
    },
  } = await api.get(url);

  const events = results;

  return events;
};

export const getSeries = async ({ name = null, length }) => {
  let params = name ? `titleStartsWith=${name}&` : '';
  params = `${params}${MARVEL_API_PARAMS}&offset=${length}`;

  const url = `${GET_SERIES}?${params}`;

  const {
    data: {
      data: { results },
    },
  } = await api.get(url);

  const series = results;

  return series;
};
