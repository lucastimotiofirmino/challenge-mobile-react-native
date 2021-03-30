import { put, takeEvery, select } from 'redux-saga/effects';

import { CHARACTERS, EVENTS, SERIES } from '~/constants/sections';

import { getCharactersByName } from '~/store/ducks/characters';
import { getEventsByName } from '~/store/ducks/events';
import { getSeriesByName } from '~/store/ducks/series';
import { Types } from '~/store/ducks/app';

function* asyncSearchByName() {
  const { section } = yield select((state) => state.app);

  switch (section) {
    case CHARACTERS:
      yield put(getCharactersByName());
      break;
    case EVENTS:
      yield put(getEventsByName());
      break;
    case SERIES:
      yield put(getSeriesByName());
      break;
    default:
      break;
  }
}

export default function* sagas() {
  yield takeEvery(Types.SEARCH_BY_NAME, asyncSearchByName);
}
