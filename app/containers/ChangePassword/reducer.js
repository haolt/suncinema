import {
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_REQUEST_SUCCESS,
  CHANGE_PASSWORD_REQUEST_FAIL,
} from './constants';

export const initialState = {
  hasChangeSuccess: false,
};

const changePasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        updatedUser: action.payloads,
      };
    case CHANGE_PASSWORD_REQUEST_SUCCESS:
      return {
        ...state,
        hasChangeSuccess: true,
      };
    case CHANGE_PASSWORD_REQUEST_FAIL:
      return {
        ...state,
        hasChangeSuccess: false,
      };
    default:
      return state;
  }
};
export default changePasswordReducer;
