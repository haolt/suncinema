import { takeLatest, call, put, select } from 'redux-saga/effects';
import sendGetBookableSeatRequest from './service';
import {
  sendGetBookableSeatRequestSuccess,
  sendGetBookableSeatRequestFail,
} from './actions';
import { GET_BOOKABLE_SEAT_REQUEST } from './constants';
import { makeSelectorMovieID } from './selectors';

function* workerGetAMovieSaga() {
  const movieID = yield select(makeSelectorMovieID());
  try {
    const response = yield call(sendGetBookableSeatRequest, movieID);
    yield put(sendGetBookableSeatRequestSuccess(response));
  } catch (error) {
    yield put(sendGetBookableSeatRequestFail(error));
  }
}

// Individual exports for testing
export default function* watchBookingPageSaga() {
  yield takeLatest(GET_BOOKABLE_SEAT_REQUEST, workerGetAMovieSaga);
}
