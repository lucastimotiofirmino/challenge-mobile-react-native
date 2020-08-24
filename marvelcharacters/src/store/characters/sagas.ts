import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';
import {loadCharacters} from '../../services/characters';
import {LOAD_CHARACTERS_REQUEST} from './types';

import {
  loadCharactersFailure,
  loadCharactersSuccess,
  loadMoreCharactersSuccess,
} from './actions';
import {CharactersActionsType} from '../../interfaces';

export function* load(action: CharactersActionsType) {
  const offset = action.payload as number;
  const {data, error} = yield call(loadCharacters, offset);
  if (error) {
    yield put(loadCharactersFailure(error));
  } else {
    if (offset === 0) {
      yield put(loadCharactersSuccess(data));
    } else {
      yield put(loadMoreCharactersSuccess(data));
    }
  }
}

export default all([takeLatest(LOAD_CHARACTERS_REQUEST, load)]);
