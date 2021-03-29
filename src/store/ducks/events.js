export const Types = {
  GET_EVENTS: 'GET_EVENTS',
  GET_EVENTS_ERROR: 'GET_EVENTS_ERROR',
  GET_EVENTS_SUCCESS: 'GET_EVENTS_SUCCESS',
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
    case Types.GET_EVENTS:
      return {
        ...state,
        error: false,
        requesting: true,
      };
    case Types.GET_EVENTS_ERROR:
      return {
        ...state,
        error: true,
        requesting: false,
      };
    case Types.GET_EVENTS_SUCCESS:
      return {
        ...state,
        list: [...list, ...payload.events],
        length: length + payload.events.length,
        error: false,
        requesting: false,
      };
    default:
      return state;
  }
}

export const getEvents = () => ({
  type: Types.GET_EVENTS,
});

export const getEventsError = () => ({
  type: Types.GET_EVENTS_ERROR,
});

export const getEventsSuccess = (events) => ({
  type: Types.GET_EVENTS_SUCCESS,
  payload: {
    events,
  },
});
