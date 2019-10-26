import {
  SORT_MOVIE_REQUEST,
  SORT_MOVIE_REQUEST_SUCCESS,
  SORT_MOVIE_REQUEST_FAIL,
} from './constants';

export const initialState = {
  order: 2, // desc
  sort: 1, // sort_by_popular
  page: 1,
  movies: [],
};

const moviePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_MOVIE_REQUEST:
      return {
        ...state,
        sort: action.payloads.sort,
      };
    case SORT_MOVIE_REQUEST_SUCCESS:
      // console.log({
      //   ...state,
      //   movies: action.response.data.data,
      // });
      return {
        ...state,
        movies: action.response.data.data,
      };
    case SORT_MOVIE_REQUEST_FAIL:
      // console.log(action);
      return state;
    default:
      return state;
  }
};

export default moviePageReducer;
