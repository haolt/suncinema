import {
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_REQUEST_SUCCESS,
  GET_USER_INFO_REQUEST_FAIL,
} from './constants';

export const sendGetUserInfoRequest = user => ({
  type: GET_USER_INFO_REQUEST,
  payloads: user,
});

export const sendGetUserInfoRequestSuccess = response => ({
  type: GET_USER_INFO_REQUEST_SUCCESS,
  response,
});

export const sendGetUserInfoRequestFail = response => ({
  type: GET_USER_INFO_REQUEST_FAIL,
  response,
});
