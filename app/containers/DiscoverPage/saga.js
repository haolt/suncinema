import { takeLatest, call, put, select } from 'redux-saga/effects';
import { handleResponse } from 'services/request/handleResponse';
import sendSortMovieRequest from './service';
import {
  sendSortMovieRequestSuccess,
  sendSortMovieRequestFail,
} from './actions';
import { SORT_MOVIE_REQUEST } from './constants';
import { makeSelectOrder, makeSelectSort, makeSelectPage } from './selectors';

function* workerSortMovieSaga() {
  const sort = yield select(makeSelectSort());
  const order = yield select(makeSelectOrder());
  const page = yield select(makeSelectPage());
  const response = yield call(sendSortMovieRequest, { sort, order, page });

  if (handleResponse(response)) {
    yield put(sendSortMovieRequestSuccess(response));
  } else {
    yield put(sendSortMovieRequestFail(response));
  }
}

export default function* watchDiscoverPageSaga() {
  yield takeLatest(SORT_MOVIE_REQUEST, workerSortMovieSaga);
}
