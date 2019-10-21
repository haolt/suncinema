import { takeLatest, call, put, select } from 'redux-saga/effects';
import sendGetAMovieRequest from './service';
import {
  sendGetAMovieRequestSuccess,
  sendGetAMovieRequestFail,
} from './actions';
import { GET_A_MOVIE_REQUEST } from './constants';
import { makeSelectorCurrentID } from './selectors';

function* workerGetAMovieSaga() {
  const currentID = yield select(makeSelectorCurrentID());
  try {
    const response = yield call(sendGetAMovieRequest, currentID);
    yield put(sendGetAMovieRequestSuccess(response));
  } catch (error) {
    yield put(sendGetAMovieRequestFail(error));
  }
}

// Individual exports for testing
export default function* watchMovieDetailPageSaga() {
  yield takeLatest(GET_A_MOVIE_REQUEST, workerGetAMovieSaga);
}
