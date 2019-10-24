/* eslint-disable no-console */
/* eslint-disable camelcase */
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { handleResponse } from 'services/request/handleResponse';
import sendRegisterRequest from './service';
import { sendRegisterRequestSuccess, sendRegisterRequestFail } from './actions';
import { POST_REGISTER_REQUEST } from './constants';
import {
  makeSelectEmail,
  makeSelectPassword,
  makeSelectName,
  makeSelectPasswordConfirmation,
} from './selectors';

function* workerGetAMovieSaga() {
  const email = yield select(makeSelectEmail());
  const password = yield select(makeSelectPassword());
  const name = yield select(makeSelectName());
  const password_confirmation = yield select(makeSelectPasswordConfirmation());
  const response = yield call(sendRegisterRequest, {
    email,
    password,
    name,
    password_confirmation,
  });

  if (handleResponse(response)) {
    yield put(sendRegisterRequestSuccess(response));
  } else {
    yield put(sendRegisterRequestFail(response));
  }
}

export default function* watchRegisterPageSaga() {
  yield takeLatest(POST_REGISTER_REQUEST, workerGetAMovieSaga);
}
