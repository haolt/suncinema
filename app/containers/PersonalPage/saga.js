import { takeLatest, call, put } from 'redux-saga/effects';
import { handleResponse } from 'services/request/handleResponse';
import sendGetUserInfoRequest from './service';
import {
  sendGetUserInfoRequestSuccess,
  sendGetUserInfoRequestFail,
} from './actions';
import { GET_USER_INFO_REQUEST } from './constants';

function* workerGetUserInforSaga() {
  const response = yield call(sendGetUserInfoRequest);
  if (handleResponse(response)) {
    yield put(sendGetUserInfoRequestSuccess(response));
  } else {
    yield put(sendGetUserInfoRequestFail(response));
  }
}

export default function* watchPersonalPageSaga() {
  yield takeLatest(GET_USER_INFO_REQUEST, workerGetUserInforSaga);
}
