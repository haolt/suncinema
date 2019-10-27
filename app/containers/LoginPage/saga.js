import { takeLatest, call, put, select } from 'redux-saga/effects';
import { handleResponse } from 'services/request/handleResponse';
import sendLoginRequest from './service';
import { sendLoginRequestSuccess, sendLoginRequestFail } from './actions';
import { POST_LOGIN_REQUEST } from './constants';
import { makeSelectEmail, makeSelectPassword } from './selectors';

function* workerGetAMovieSaga() {
  const email = yield select(makeSelectEmail());
  const password = yield select(makeSelectPassword());
  const response = yield call(sendLoginRequest, { email, password });
  if (handleResponse(response)) {
    yield put(sendLoginRequestSuccess(response));
  } else {
    yield put(sendLoginRequestFail(response));
  }
}

export default function* watchLoginPageSaga() {
  yield takeLatest(POST_LOGIN_REQUEST, workerGetAMovieSaga);
}
