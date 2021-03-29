import { put, takeEvery, call, select } from 'redux-saga/effects';

import { getCharacters } from '~/api/calls';

import {
  getCharactersSuccess,
  getCharactersError,
  Types as CharactersTypes,
} from '~/store/ducks/characters';

function* asyncGetCharacters() {
  const { length } = yield select((state) => state.characters);

  const characters = yield call(getCharacters, { length });

  if (characters) {
    yield put(getCharactersSuccess(characters));
  } else {
    yield put(getCharactersError());
  }
}

export default function* sagas() {
  yield takeEvery(CharactersTypes.GET_CHARACTERS, asyncGetCharacters);
}
