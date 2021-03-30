import { put, takeEvery, call, select } from 'redux-saga/effects';

import { getCharacters } from '~/api/calls';

import {
  getCharactersSuccess,
  getCharactersError,
  getCharactersByNameSuccess,
  getCharactersByNameError,
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

function* asyncGetCharactersByName() {
  const { lengthByName } = yield select((state) => state.characters);
  const { nameForSearch } = yield select((state) => state.app);

  const characters = yield call(getCharacters, {
    length: lengthByName,
    name: nameForSearch,
  });

  if (characters) {
    yield put(getCharactersByNameSuccess(characters));
  } else {
    yield put(getCharactersByNameError());
  }
}

export default function* sagas() {
  yield takeEvery(CharactersTypes.GET_CHARACTERS, asyncGetCharacters);
  yield takeEvery(
    CharactersTypes.GET_CHARACTERS_BY_NAME,
    asyncGetCharactersByName,
  );
}
