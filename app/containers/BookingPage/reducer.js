/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import {
  GET_BOOKABLE_SEAT_REQUEST,
  GET_BOOKABLE_SEAT_REQUEST_SUCCESS,
  GET_BOOKABLE_SEAT_REQUEST_FAIL,
} from './constants';

export const initialState = {
  movieID: 0,
  bookableSeat: [[]],
  updatedAt: '',
};

const convertStringTo2DimensArray = txtSeats => {
  let result = txtSeats.substring(2, txtSeats.length - 2).split('], [');
  result.forEach(rowSeat => {
    rowSeat.split(',');
  });
  result = result.map(rowSeat => {
    rowSeat = rowSeat.split(', ');
    return rowSeat;
  });
  return result;
};

const bookingPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKABLE_SEAT_REQUEST:
      return { ...state, movieID: action.payloads };
    case GET_BOOKABLE_SEAT_REQUEST_SUCCESS:
      return {
        ...state,
        bookableSeat: convertStringTo2DimensArray(action.response.data.available_seat),
        updatedAt: action.response.data.updated_at,
      };
    case GET_BOOKABLE_SEAT_REQUEST_FAIL:
      return { ...state };
    default:
      return state;
  }
};

export default bookingPageReducer;
