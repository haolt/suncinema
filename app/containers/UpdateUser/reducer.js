import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_REQUEST_SUCCESS,
  UPDATE_USER_REQUEST_FAIL,
} from './constants';

export const initialState = {
  updatedUser: {},
  hasUpdatedSuccess: false,
};

const updateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        updatedUser: action.payloads,
      };
    case UPDATE_USER_REQUEST_SUCCESS:
      return {
        ...state,
        hasUpdatedSuccess: true,
      };
    case UPDATE_USER_REQUEST_FAIL:
      return {
        ...state,
        hasUpdatedSuccess: false,
      };
    default:
      return state;
  }
};
export default updateUserReducer;
