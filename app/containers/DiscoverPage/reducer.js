/* eslint-disable no-console */
import {
  SEARCH_MOVIE_REQUEST,
  SEARCH_MOVIE_REQUEST_SUCCESS,
  SEARCH_MOVIE_REQUEST_FAIL,
  RESET_DEFAULT,
} from './constants';

export const initialState = {
  keywords: '',
  movies: [],
  resultCount: -1, // default
  hasRequestDone: true,
};

const discoverPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE_REQUEST:
      console.log('REDUCER: ', {
        ...state,
        keywords: action.payloads,
        hasRequestDone: false,
      });
      return {
        ...state,
        keywords: action.payloads,
        hasRequestDone: false,
      };
    case SEARCH_MOVIE_REQUEST_SUCCESS:
      console.log(' Reducer: ', {
        ...state,
        movies: action.response.data,
        resultCount: action.response.data.length,
        hasRequestDone: true,
      });
      return {
        ...state,
        movies: action.response.data,
        resultCount: action.response.data.length,
        hasRequestDone: true,
      };
    case SEARCH_MOVIE_REQUEST_FAIL:
      return {
        ...state,
        hasRequestDone: true,
      };
    case RESET_DEFAULT:
      return {
        ...state,
        movies: [],
        resultCount: -1,
        hasRequestDone: true,
      };
    default:
      return state;
  }
};

export default discoverPageReducer;
