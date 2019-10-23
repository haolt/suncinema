import {
  POST_LOGIN_REQUEST,
  POST_LOGIN_REQUEST_SUCCESS,
  POST_LOGIN_REQUEST_FAIL,
} from './constants';

export const sendLoginRequest = user => ({
  type: POST_LOGIN_REQUEST,
  payloads: user,
});

export const sendLoginRequestSuccess = response => ({
  type: POST_LOGIN_REQUEST_SUCCESS,
  response,
});

export const sendLoginRequestFail = response => ({
  type: POST_LOGIN_REQUEST_FAIL,
  response,
});
