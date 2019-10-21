import {
  GET_A_MOVIE_REQUEST,
  GET_A_MOVIE_REQUEST_SUCCESS,
  GET_A_MOVIE_REQUEST_FAIL,
} from './constants';

export const sendGetAMovieRequest = id => ({
  type: GET_A_MOVIE_REQUEST,
  payloads: id,
});

export const sendGetAMovieRequestSuccess = response => ({
  type: GET_A_MOVIE_REQUEST_SUCCESS,
  response,
});

export const sendGetAMovieRequestFail = errors => ({
  type: GET_A_MOVIE_REQUEST_FAIL,
  errors,
});
