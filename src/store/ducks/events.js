import { Types as AppTypes } from './app';

export const Types = {
  GET_EVENTS: 'GET_EVENTS',
  GET_EVENTS_ERROR: 'GET_EVENTS_ERROR',
  GET_EVENTS_SUCCESS: 'GET_EVENTS_SUCCESS',
  GET_EVENTS_BY_NAME: 'GET_EVENTS_BY_NAME',
  GET_EVENTS_BY_NAME_SUCCESS: 'GET_EVENTS_BY_NAME_SUCCESS',
  GET_EVENTS_BY_NAME_ERROR: 'GET_EVENTS_BY_NAME_ERROR',
};

const INITIAL_STATE = {
  list: [],
  listByName: [],
  length: 0,
  lengthByName: 0,
  error: false,
  requesting: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  const { list, length, lengthByName } = state;

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
    case Types.GET_EVENTS_BY_NAME:
      return {
        ...state,
        error: false,
        requesting: true,
      };
    case Types.GET_EVENTS_BY_NAME_SUCCESS:
      return {
        ...state,
        listByName: payload.events,
        lengthByName: lengthByName + payload.events.length,
        error: false,
        requesting: false,
      };
    case Types.GET_EVENTS_BY_NAME_ERROR:
      return {
        ...state,
        listByName: [],
        error: true,
        requesting: false,
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

export const getEventsByName = () => ({
  type: Types.GET_EVENTS_BY_NAME,
});

export const getEventsByNameError = () => ({
  type: Types.GET_EVENTS_BY_NAME_ERROR,
});

export const getEventsByNameSuccess = (events) => ({
  type: Types.GET_EVENTS_BY_NAME_SUCCESS,
  payload: {
    events,
  },
});
