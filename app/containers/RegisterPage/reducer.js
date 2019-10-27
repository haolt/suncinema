/* eslint-disable no-console */
import {
  POST_REGISTER_REQUEST,
  POST_REGISTER_REQUEST_SUCCESS,
  POST_REGISTER_REQUEST_FAIL,
  RESET_ERRORS,
} from './constants';

export const initialState = {
  email: '',
  password: '',
  password_confirmation: '',
  name: '',
  nameError: [''],
  emailError: [''],
  passwordError: [''],
  isRegisterSuccess: false,
};

const registerPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REGISTER_REQUEST:
      return {
        ...state,
        email: action.payloads.email,
        password: action.payloads.password,
        password_confirmation: action.payloads.password_confirmation,
        name: action.payloads.name,
      };
    case POST_REGISTER_REQUEST_SUCCESS:
      return { ...state, isRegisterSuccess: true };
    case POST_REGISTER_REQUEST_FAIL:
      return {
        ...state,
        nameError: action.response.data.name,
        emailError: action.response.data.email,
        passwordError: action.response.data.password,
      };
    case RESET_ERRORS:
      return {
        ...state,
        email: '',
        password: '',
        password_confirmation: '',
        name: '',
        nameError: [''],
        emailError: [''],
        passwordError: [''],
      };
    default:
      return state;
  }
};

export default registerPageReducer;
