import { takeLatest, call, put, select } from 'redux-saga/effects';
import { handleResponse } from 'services/request/handleResponse';
import sendSearchMovieRequest from './service';
import {
  sendSearchMovieRequestSuccess,
  sendSearchMovieRequestFail,
  resetDefault,
} from './actions';
import { SEARCH_MOVIE_REQUEST } from './constants';
import { makeSelectKeywords } from './selectors';

function* workerSearchMovieSaga() {
  const keywords = yield select(makeSelectKeywords());
  if (keywords.trim()) {
    const response = yield call(sendSearchMovieRequest, keywords);

    if (handleResponse(response)) {
      yield put(sendSearchMovieRequestSuccess(response));
    } else {
      yield put(sendSearchMovieRequestFail(response));
    }
  } else {
    yield put(resetDefault());
  }
}

export default function* watchDiscoverPageSaga() {
  yield takeLatest(SEARCH_MOVIE_REQUEST, workerSearchMovieSaga);
}
