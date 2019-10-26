import {
  SORT_MOVIE_REQUEST,
  SORT_MOVIE_REQUEST_SUCCESS,
  SORT_MOVIE_REQUEST_FAIL,
} from './constants';

export const sendSortMovieRequest = payloads => ({
  type: SORT_MOVIE_REQUEST,
  payloads,
});

export const sendSortMovieRequestSuccess = response => ({
  type: SORT_MOVIE_REQUEST_SUCCESS,
  response,
});

export const sendSortMovieRequestFail = errors => ({
  type: SORT_MOVIE_REQUEST_FAIL,
  errors,
});
