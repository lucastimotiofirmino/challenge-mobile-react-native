import { AnyAction } from 'redux';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import md5 from 'js-md5';

import { CharacterTypes } from './types';
import api from '../../../services/api';

import { getCharacterSuccess } from './actions';

const PUBLIC_KEY = '63c971128d42a813bbe8215260de15e7';
const PRIVATE_KEY = 'c39c4d0ff4002bb61d4a138806afa047ed559a53';

const timestamp = Number(new Date());
const hash = md5.create();
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

export function* getCharacters(): unknown {
  try {
    const response = yield call(
      api.get,
      `/characters?ts=${timestamp}&orderBy=name&limit=20&offset=${1}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
    );

    console.tron.log('RESPONSE', response);

    if (response.status === 200) {
      yield put(getCharacterSuccess(response.data));
    }
  } catch (err) {
    //
  }
}

export default all([
  takeLatest(CharacterTypes.GET_CHARACTER_REQUEST, getCharacters),
]);
