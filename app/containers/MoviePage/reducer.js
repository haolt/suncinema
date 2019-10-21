/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
// import produce from 'immer';
import { GET_MOVIE_REQUEST_SUCCESS, GET_MOVIE_REQUEST_FAIL } from './constants';

export const initialState = {
  movies: [],
  page: 1,
  total: 253,
};

const moviePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_REQUEST_SUCCESS:
      return {
        ...state,
        movies: action.response.data.data,
        page: action.response.data.page,
        total: action.response.data.total,
      };
    case GET_MOVIE_REQUEST_FAIL:
      return state;
    default:
      return state;
  }
};

export default moviePageReducer;

// const moviePageReducer = (state = initialState, action) =>
//   produce(state, draft => {
//     switch (action.type) {
//       case GET_MOVIE_REQUEST:
//         break;
//       case GET_MOVIE_REQUEST_SUCCESS:
//         draft = action.response.data;
//         console.log('In Reducer: GET_MOVIE_REQUEST_SUCCESS', draft);
//         break;
//       case GET_MOVIE_REQUEST_FAIL:
//         console.log('GET_MOVIE_REQUEST_FAIL: ', action);
//         break;
//       default:
//         break;
//     }
//   });
