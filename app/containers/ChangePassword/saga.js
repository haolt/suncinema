/* eslint-disable no-unused-vars */
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { handleResponse } from 'services/request/handleResponse';
import sendChangePasswordRequest from './service';
import {
  sendChangePasswordRequestSuccess,
  sendChangePasswordRequestFail,
} from './actions';
import { CHANGE_PASSWORD_REQUEST } from './constants';
// import { } from './selectors';

function* workerGetAMovieSaga() {
  // const updatedUser = yield select(makeSelectUpdatedUser());
  // const response = yield call(sendChangePasswordRequest, updatedUser);
  // if (handleResponse(response)) {
  //   yield put(sendChangePasswordRequestSuccess(response));
  // } else {
  //   yield put(sendChangePasswordRequestFail(response));
  // }
}

export default function* watchChangePasswordSaga() {
  yield takeLatest(CHANGE_PASSWORD_REQUEST, workerGetAMovieSaga);
}
