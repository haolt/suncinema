/* eslint-disable no-console */
import {
  SORT_MOVIE_REQUEST,
  SORT_MOVIE_REQUEST_SUCCESS,
  SORT_MOVIE_REQUEST_FAIL,
} from './constants';

export const initialState = {
  order: 2, // desc
  sort: 1, // sort_by_popular
  page: 1, // currentPage
  pageTotal: 1, // quantity of pages
  movies: [],
  hasRequestDone: false,
};

const moviePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_MOVIE_REQUEST:
      return {
        ...state,
        sort: action.payloads.sort ? action.payloads.sort : state.sort,
        page: action.payloads.page ? action.payloads.page : state.page,
      };
    case SORT_MOVIE_REQUEST_SUCCESS:
      return {
        ...state,
        movies: action.response.data.data,
        page: action.response.data.page,
        pageTotal: Math.ceil(action.response.data.total / 10),
        hasRequestDone: true,
      };
    case SORT_MOVIE_REQUEST_FAIL:
      return {
        ...state,
        hasRequestDone: true,
      };
    default:
      return state;
  }
};

export default moviePageReducer;
