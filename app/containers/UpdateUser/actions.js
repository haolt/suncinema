import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_REQUEST_SUCCESS,
  UPDATE_USER_REQUEST_FAIL,
} from './constants';

export const sendUpdateUserRequest = user => ({
  type: UPDATE_USER_REQUEST,
  payloads: user,
});

export const sendUpdateUserRequestSuccess = response => ({
  type: UPDATE_USER_REQUEST_SUCCESS,
  response,
});

export const sendUpdateUserRequestFail = response => ({
  type: UPDATE_USER_REQUEST_FAIL,
  response,
});
