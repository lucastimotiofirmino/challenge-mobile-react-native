import { put, takeEvery, call, select } from 'redux-saga/effects';

import { getSeries } from '~/api/calls';

import {
  getSeriesSuccess,
  getSeriesError,
  getSeriesByNameError,
  getSeriesByNameSuccess,
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

function* asyncGetSeriesByName() {
  const { lengthByName } = yield select((state) => state.events);
  const { nameForSearch } = yield select((state) => state.app);

  const series = yield call(getSeries, {
    length: lengthByName,
    name: nameForSearch,
  });

  if (series) {
    yield put(getSeriesByNameSuccess(series));
  } else {
    yield put(getSeriesByNameError());
  }
}

export default function* sagas() {
  yield takeEvery(SeriesTypes.GET_SERIES, asyncGetSeries);
  yield takeEvery(SeriesTypes.GET_SERIES_BY_NAME, asyncGetSeriesByName);
}
