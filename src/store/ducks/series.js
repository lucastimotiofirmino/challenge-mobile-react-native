import { Types as AppTypes } from './app';

export const Types = {
  GET_SERIES: 'GET_SERIES',
  GET_SERIES_ERROR: 'GET_SERIES_ERROR',
  GET_SERIES_SUCCESS: 'GET_SERIES_SUCCESS',
  GET_SERIES_BY_NAME: 'GET_SERIES_BY_NAME',
  GET_SERIES_BY_NAME_SUCCESS: 'GET_SERIES_BY_NAME_SUCCESS',
  GET_SERIES_BY_NAME_ERROR: 'GET_SERIES_BY_NAME_ERROR',
  LIKE_A_SERIE: 'LIKE_A_SERIE',
  UNLIKE_A_SERIE: 'UNLIKE_A_SERIE',
};

const INITIAL_STATE = {
  list: [],
  listByName: [],
  length: 0,
  lengthByName: 0,
  error: false,
  requesting: false,
  likedSeriesIds: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  const { list, length, lengthByName, listByName } = state;

  switch (type) {
    case Types.GET_SERIES:
      return {
        ...state,
        error: false,
        requesting: true,
      };
    case Types.GET_SERIES_ERROR:
      return {
        ...state,
        error: true,
        requesting: false,
      };
    case Types.GET_SERIES_SUCCESS:
      return {
        ...state,
        list: [...list, ...payload.series],
        length: length + payload.series.length,
        error: false,
        requesting: false,
      };
    case Types.GET_SERIES_BY_NAME:
      return {
        ...state,
        error: false,
        requesting: true,
      };
    case Types.GET_SERIES_BY_NAME_SUCCESS:
      return {
        ...state,
        listByName: [...listByName, ...payload.series],
        lengthByName: lengthByName + payload.series.length,
        error: false,
        requesting: false,
      };
    case Types.GET_SERIES_BY_NAME_ERROR:
      return {
        ...state,
        listByName: [],
        error: true,
        requesting: false,
      };
    case AppTypes.SEARCH_BY_NAME:
      return {
        ...state,
        listByName: [],
        lengthByName: 0,
      };
    case AppTypes.RESET_NAME:
    case AppTypes.CHANGE_SECTIONS:
      return {
        ...state,
        listByName: [],
      };
    default:
      return state;
  }
}

export const getSeries = () => ({
  type: Types.GET_SERIES,
});

export const getSeriesError = () => ({
  type: Types.GET_SERIES_ERROR,
});

export const getSeriesSuccess = (series) => ({
  type: Types.GET_SERIES_SUCCESS,
  payload: {
    series,
  },
});

export const getSeriesByName = () => ({
  type: Types.GET_SERIES_BY_NAME,
});

export const getSeriesByNameError = () => ({
  type: Types.GET_SERIES_BY_NAME_ERROR,
});

export const getSeriesByNameSuccess = (series) => ({
  type: Types.GET_SERIES_BY_NAME_SUCCESS,
  payload: {
    series,
  },
});

export const likeASerie = (serie) => ({
  type: Types.LIKE_A_SERIE,
  payload: {
    serie,
  },
});

export const unlikeASerie = (serie) => ({
  type: Types.UNLIKE_A_SERIE,
  payload: {
    serie,
  },
});
