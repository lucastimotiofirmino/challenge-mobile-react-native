import { put, takeEvery, call, select } from 'redux-saga/effects';

import { getSeries } from '~/api/calls';

import {
  getSeriesSuccess,
  getSeriesError,
  Types as SeriesTypes,
} from '~/store/ducks/series';

function* asyncGetSeries() {
  const { length } = yield select((state) => state.series);

  const series = yield call(getSeries, { length });

  if (series) {
    yield put(getSeriesSuccess(series));
  } else {
    yield put(getSeriesError());
  }
}

export default function* sagas() {
  yield takeEvery(SeriesTypes.GET_SERIES, asyncGetSeries);
}
