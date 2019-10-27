import {
  GET_BOOKABLE_SEAT_REQUEST,
  GET_BOOKABLE_SEAT_REQUEST_SUCCESS,
  GET_BOOKABLE_SEAT_REQUEST_FAIL,
} from './constants';

export const sendGetBookableSeatRequest = id => ({
  type: GET_BOOKABLE_SEAT_REQUEST,
  payloads: id,
});

export const sendGetBookableSeatRequestSuccess = response => ({
  type: GET_BOOKABLE_SEAT_REQUEST_SUCCESS,
  response,
});

export const sendGetBookableSeatRequestFail = errors => ({
  type: GET_BOOKABLE_SEAT_REQUEST_FAIL,
  errors,
});
