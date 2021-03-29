export const Types = {
  GET_SERIES: 'GET_SERIES',
  GET_SERIES_ERROR: 'GET_SERIES_ERROR',
  GET_SERIES_SUCCESS: 'GET_SERIES_SUCCESS',
};

const INITIAL_STATE = {
  list: [],
  length: 0,
  error: false,
  requesting: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  const { list, length } = state;

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
