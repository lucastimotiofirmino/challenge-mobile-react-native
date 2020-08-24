import AsyncStorage from '@react-native-community/async-storage';
import {takeLatest, call, put, all} from 'redux-saga/effects';
import {GET_FAVORITES, SAVE_FAVORITES} from './types';

import {getFavoritesSuccess} from './actions';
import {FavoritesActionsType} from '../../interfaces';

export function* get() {
  const favorites = yield call(
    AsyncStorage.getItem,
    'MarvelCharacters:favorites',
  );

  yield put(getFavoritesSuccess(JSON.parse(favorites)));
}

export function* save(item: FavoritesActionsType) {
  yield call(
    AsyncStorage.setItem,
    'MarvelCharacters:favorites',
    JSON.stringify(item.payload),
  );
  get();
}

export default all([
  takeLatest(GET_FAVORITES, get),
  takeLatest(SAVE_FAVORITES, save),
]);
