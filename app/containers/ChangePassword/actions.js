import {
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_REQUEST_SUCCESS,
  CHANGE_PASSWORD_REQUEST_FAIL,
} from './constants';

export const sendChangePasswordRequest = user => ({
  type: CHANGE_PASSWORD_REQUEST,
  payloads: user,
});

export const sendChangePasswordRequestSuccess = response => ({
  type: CHANGE_PASSWORD_REQUEST_SUCCESS,
  response,
});

export const sendChangePasswordRequestFail = response => ({
  type: CHANGE_PASSWORD_REQUEST_FAIL,
  response,
});
