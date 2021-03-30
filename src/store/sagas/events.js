import { put, takeEvery, call, select } from 'redux-saga/effects';

import { getEvents } from '~/api/calls';

import {
  getEventsSuccess,
  getEventsError,
  getEventsByNameSuccess,
  getEventsByNameError,
  Types as EventsTypes,
} from '~/store/ducks/events';

function* asyncGetEvents() {
  const { length } = yield select((state) => state.events);

  const events = yield call(getEvents, { length });

  if (events) {
    yield put(getEventsSuccess(events));
  } else {
    yield put(getEventsError());
  }
}

function* asyncGetEventsByName() {
  const { lengthByName } = yield select((state) => state.events);
  const { nameForSearch } = yield select((state) => state.app);

  const events = yield call(getEvents, {
    length: lengthByName,
    name: nameForSearch,
  });

  if (events) {
    yield put(getEventsByNameSuccess(events));
  } else {
    yield put(getEventsByNameError());
  }
}

export default function* sagas() {
  yield takeEvery(EventsTypes.GET_EVENTS, asyncGetEvents);
  yield takeEvery(EventsTypes.GET_EVENTS_BY_NAME, asyncGetEventsByName);
}
