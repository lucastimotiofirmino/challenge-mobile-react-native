import { put, takeEvery, call, select } from 'redux-saga/effects';

import { getEvents } from '~/api/calls';

import {
  getEventsSuccess,
  getEventsError,
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

export default function* sagas() {
  yield takeEvery(EventsTypes.GET_EVENTS, asyncGetEvents);
}
