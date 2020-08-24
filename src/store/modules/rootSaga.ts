import { all } from 'redux-saga/effects';

import characters from './Characters/sagas';

export default function* rootSaga(): Generator {
  yield all([characters]);
}
