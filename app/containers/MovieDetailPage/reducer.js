/* eslint-disable no-console */
/*
 *
 * MovieDetailPage reducer
 *
 */
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
      // console.log('Reducer: ', { ...state, currentID: action.payloads });
      return { ...state, currentID: action.payloads };
    case GET_A_MOVIE_REQUEST_SUCCESS:
      console.log(action);
      return { ...state, currentMovie: action.response.data };
    case GET_A_MOVIE_REQUEST_FAIL:
      console.log(action);
      return { ...state };
    default:
      return state;
  }
};

export default movieDetailPageReducer;
