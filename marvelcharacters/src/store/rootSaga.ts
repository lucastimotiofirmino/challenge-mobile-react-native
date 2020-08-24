import {all} from 'redux-saga/effects';

import characters from './characters/sagas';
import favorites from './favorites/sagas';

export default function* rootSaga() {
  return yield all([characters, favorites]);
}
