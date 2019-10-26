import {
  SEARCH_MOVIE_REQUEST,
  SEARCH_MOVIE_REQUEST_SUCCESS,
  SEARCH_MOVIE_REQUEST_FAIL,
  RESET_DEFAULT,
} from './constants';

export const sendSearchMovieRequest = payloads => ({
  type: SEARCH_MOVIE_REQUEST,
  payloads,
});

export const sendSearchMovieRequestSuccess = response => ({
  type: SEARCH_MOVIE_REQUEST_SUCCESS,
  response,
});

export const sendSearchMovieRequestFail = errors => ({
  type: SEARCH_MOVIE_REQUEST_FAIL,
  errors,
});
export const resetDefault = () => ({
  type: RESET_DEFAULT,
});
