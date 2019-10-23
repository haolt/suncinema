import {
  GET_A_MOVIE_REQUEST,
  GET_A_MOVIE_REQUEST_SUCCESS,
  GET_A_MOVIE_REQUEST_FAIL,
} from './constants';

export const initialState = {
  curentID: 0,
  currentMovie: {},
};

const movieDetailPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_A_MOVIE_REQUEST:
      return { ...state, currentID: action.payloads };
    case GET_A_MOVIE_REQUEST_SUCCESS:
      return { ...state, currentMovie: action.response.data };
    case GET_A_MOVIE_REQUEST_FAIL:
      return { ...state };
    default:
      return state;
  }
};

export default movieDetailPageReducer;
