import { SagaIterator } from 'redux-saga';
import { all } from 'redux-saga/effects';
import sagas from './characters/sagas';
import charactersSagas from './characters/sagas';

export default function* rootSaga(): SagaIterator {
  return yield all([charactersSagas(), sagas()]);
}
