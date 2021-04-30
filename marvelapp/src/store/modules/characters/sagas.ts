import { takeLatest, call, put, delay, select, take } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import AsyncStorage from '@react-native-community/async-storage';
import KeyStorage from '../../../utils/enums';
import { ActionTypes } from './types';
import {
  PayloadGetCharactersRequest,
  getCharactersRequestAction,
  getCharactersRequestSuccessAction,
  getCharactersFailureAction,
  getCharactersInfoSuccessAction,
  getSearchCharacterRequestAction,
  getSearchCharacterRequestSuccessAction,
  getSearchCharacterRequestFailureAction,
  setShowModal,
  getDetailCharacterRequestSuccessAction,
  getDetailCharacterRequestAction,
  getDetailCharacterRequestFailureAction,
  setFavoritePersonAction,
  setFavoritePersonSuccessAction,
  setFavoritePersonFailureAction,
} from './actions';
import Api from '../../../services/api';
import { IState } from '../../index';

type getRequestCharacters = ReturnType<typeof getCharactersRequestAction>;

type getRequestCharacter = ReturnType<typeof getSearchCharacterRequestAction>;

type getRequestDetailCharacter = ReturnType<
  typeof getDetailCharacterRequestAction
>;

type getFavoritePerson = ReturnType<typeof setFavoritePersonAction>;

export function* getCharacters({
  payload,
}: getRequestCharacters): SagaIterator {
  const oldData = yield select(
    (state: IState) => state.characters.itemsCharacters,
  );
  const { limit, offset } = payload;

  try {
    const response = yield call(Api.loadCharacters, offset, limit);
    const infoCharacters = {
      offset: response.data.data.offset,
      limit: response.data.data.limit,
      total: response.data.data.total,
      count: response.data.data.count,
    };
    yield put(getCharactersInfoSuccessAction(infoCharacters));

    yield put(getCharactersRequestSuccessAction(response.data.data.results));
  } catch (e) {
    console.log('error', e);
    yield put(getCharactersFailureAction());
  }
}

export function* getSearchCharacter({
  payload,
}: getRequestCharacter): SagaIterator {
  const { name } = payload;

  try {
    const response = yield call(Api.searchCharacters, name);
    yield put(
      getSearchCharacterRequestSuccessAction(response.data.data.results),
    );
  } catch (e) {
    console.log(e);
    yield put(getSearchCharacterRequestFailureAction());
  }
}

export function* getOneCharacterDetail({
  payload,
}: getRequestDetailCharacter): SagaIterator {
  const { characterId } = payload;

  try {
    const response = yield call(Api.detailCharacters, characterId);
    yield put(
      getDetailCharacterRequestSuccessAction(response.data.data.results[0]),
    );
    yield put(setShowModal(true));
  } catch (e) {
    yield put(getDetailCharacterRequestFailureAction());
  }
}

export function* setFavoriteCharacter({
  payload,
}: getFavoritePerson): SagaIterator {
  const { character } = payload;

  const oldData = yield select(
    (state: IState) => state.characters.favoriteCharacters,
  );
  const dataCharacters = [...oldData, character];

  yield put(setFavoritePersonSuccessAction(dataCharacters));

  AsyncStorage.setItem(
    KeyStorage.charactersLocal,
    JSON.stringify(dataCharacters),
  );
}

export default function* (): SagaIterator {
  yield takeLatest(ActionTypes.getTypeCharactersRequest, getCharacters);
  yield takeLatest(
    ActionTypes.getTypeCharacterSearchRequest,
    getSearchCharacter,
  );
  yield takeLatest(
    ActionTypes.getTypeDetailCharacterRequest,
    getOneCharacterDetail,
  );

  yield takeLatest(ActionTypes.getTypeFavoriteCharacter, setFavoriteCharacter);
}
