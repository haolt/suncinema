import { takeLatest, call, put, select } from 'redux-saga/effects';
import { handleResponse } from 'services/request/handleResponse';
import sendUpdateUserRequest from './service';
import { sendUpdateUserRequestSuccess, sendUpdateUserRequestFail } from './actions';
import { UPDATE_USER_REQUEST } from './constants';
import { makeSelectUpdatedUser } from './selectors';

function* workerGetAMovieSaga() {
  const updatedUser = yield select(makeSelectUpdatedUser());
  const response = yield call(sendUpdateUserRequest, updatedUser);

  if (handleResponse(response)) {
    yield put(sendUpdateUserRequestSuccess(response));
  } else {
    yield put(sendUpdateUserRequestFail(response));
  }
}

export default function* watchUpdateUserSaga() {
  yield takeLatest(UPDATE_USER_REQUEST, workerGetAMovieSaga);
}
