import { takeLatest, call, put } from 'redux-saga/effects';
import sendGetMovieRequest from './service';
import { sendGetMovieRequestSuccess, sendGetMovieRequestFail } from './actions';
import { GET_MOVIE_REQUEST } from './constants';

function* workerGetMovieSaga() {
  try {
    const response = yield call(sendGetMovieRequest);
    yield put(sendGetMovieRequestSuccess(response));
  } catch (error) {
    yield put(sendGetMovieRequestFail(error));
  }
}

export default function* watchMoviePageSaga() {
  yield takeLatest(GET_MOVIE_REQUEST, workerGetMovieSaga);
}
