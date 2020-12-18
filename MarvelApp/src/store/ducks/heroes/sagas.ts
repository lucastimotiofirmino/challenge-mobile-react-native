import {call, put} from 'redux-saga/effects';
import api from '../../../service/api';

import {loadSuccess, loadFailure} from './actions';

export function* load() {
  try {
    console.log('PASSOU AQUI >');
    const response = yield call(api.get, '/v1/public/characters');
    console.log(response);
    yield put(loadSuccess(response.data));
  } catch (err) {
    console.log('ERROR ' + err);
    yield put(loadFailure());
  }
}
