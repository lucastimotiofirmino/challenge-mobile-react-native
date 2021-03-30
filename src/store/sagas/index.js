import { all, fork } from 'redux-saga/effects';

import characters from './characters';
import events from './events';
import series from './series';
import app from './app';

export default function* sagas() {
  yield all([fork(characters), fork(events), fork(series), fork(app)]);
}
