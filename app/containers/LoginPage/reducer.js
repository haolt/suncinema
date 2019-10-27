/* eslint-disable no-console */
import { setCookie } from 'services/cookie';
import { ACCESS_TOKEN } from 'commons/constants';
import {
  POST_LOGIN_REQUEST,
  POST_LOGIN_REQUEST_SUCCESS,
  POST_LOGIN_REQUEST_FAIL,
  RESET_ERRORS,
} from './constants';

export const initialState = {
  email: '',
  password: '',
  emailError: [''],
  passwordError: [''],
  error: '',
  isLoginSuccess: false,
};

let token;

const loginPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOGIN_REQUEST:
      return {
        ...state,
        email: action.payloads.email,
        password: action.payloads.password,
      };
    case POST_LOGIN_REQUEST_SUCCESS:
      token = action.response.data;
      setCookie(ACCESS_TOKEN, token.access_token, 365);
      return { ...state, isLoginSuccess: true };
    case POST_LOGIN_REQUEST_FAIL:
      return {
        ...state,
        isLoginSuccess: false,
        emailError: action.response.data.email,
        passwordError: action.response.data.password,
        error: action.response.data.error,
      };
    case RESET_ERRORS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
export default loginPageReducer;
