/* eslint-disable no-console */
import {
  GET_USER_INFO_REQUEST_SUCCESS,
  GET_USER_INFO_REQUEST_FAIL,
} from './constants';

export const initialState = {};

const personalPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO_REQUEST_SUCCESS:
      return action.response.data;
    case GET_USER_INFO_REQUEST_FAIL:
      return state;
    default:
      return state;
  }
};
export default personalPageReducer;
