import {
  POST_REGISTER_REQUEST,
  POST_REGISTER_REQUEST_SUCCESS,
  POST_REGISTER_REQUEST_FAIL,
  RESET_ERRORS,
} from './constants';

export const sendRegisterRequest = user => ({
  type: POST_REGISTER_REQUEST,
  payloads: user,
});

export const sendRegisterRequestSuccess = response => ({
  type: POST_REGISTER_REQUEST_SUCCESS,
  response,
});

export const sendRegisterRequestFail = response => ({
  type: POST_REGISTER_REQUEST_FAIL,
  response,
});
export const resetError = () => ({
  type: RESET_ERRORS,
});
