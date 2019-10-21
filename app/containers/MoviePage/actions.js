import {
  GET_MOVIE_REQUEST,
  GET_MOVIE_REQUEST_SUCCESS,
  GET_MOVIE_REQUEST_FAIL,
} from './constants';

export const sendGetMovieRequest = () => ({
  type: GET_MOVIE_REQUEST,
});

export const sendGetMovieRequestSuccess = response => ({
  type: GET_MOVIE_REQUEST_SUCCESS,
  response,
});

export const sendGetMovieRequestFail = errors => ({
  type: GET_MOVIE_REQUEST_FAIL,
  errors,
});
