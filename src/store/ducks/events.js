import { Types as AppTypes } from './app';

import { removeLike } from '~/utils/functions';

export const Types = {
  GET_EVENTS: 'GET_EVENTS',
  GET_EVENTS_ERROR: 'GET_EVENTS_ERROR',
  GET_EVENTS_SUCCESS: 'GET_EVENTS_SUCCESS',
  GET_EVENTS_BY_NAME: 'GET_EVENTS_BY_NAME',
  GET_EVENTS_BY_NAME_SUCCESS: 'GET_EVENTS_BY_NAME_SUCCESS',
  GET_EVENTS_BY_NAME_ERROR: 'GET_EVENTS_BY_NAME_ERROR',
  LIKE_A_EVENT: 'LIKE_A_EVENT',
  UNLIKE_A_EVENT: 'UNLIKE_A_EVENT',
};

const INITIAL_STATE = {
  list: [],
  listByName: [],
  length: 0,
  lengthByName: 0,
  error: false,
  requesting: false,
  likedEventsIds: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  const { list, length, lengthByName, listByName, likedEventsIds } = state;

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
        listByName: [...listByName, ...payload.events],
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
    case Types.UNLIKE_A_EVENT:
      return {
        ...state,
        likedEventsIds: removeLike(payload.eventId, likedEventsIds),
      };
    case Types.LIKE_A_EVENT:
      return {
        ...state,
        likedEventsIds: [...likedEventsIds, payload.eventId],
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
        lengthByName: 0,
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

export const likeAEvent = (eventId) => ({
  type: Types.LIKE_A_EVENT,
  payload: {
    eventId,
  },
});

export const unlikeAEvent = (eventId) => ({
  type: Types.UNLIKE_A_EVENT,
  payload: {
    eventId,
  },
});
