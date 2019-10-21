import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMoviePageDomain = state => state.moviePage || initialState;

// *** test
// const selectRootStore = state => state;

const makeSelectMoviePage = () =>
  createSelector(
    selectMoviePageDomain,
    substate => substate,
  );

const makeSelectorMovies = () =>
  createSelector(
    selectMoviePageDomain,
    substate => substate.movies,
  );

const makeSelectorCurrentPage = () =>
  createSelector(
    selectMoviePageDomain,
    substate => substate.page,
  );

const makeSelectorTotal = () =>
  createSelector(
    selectMoviePageDomain,
    substate => substate.total,
  );

export default makeSelectMoviePage;
export {
  selectMoviePageDomain,
  makeSelectorMovies,
  makeSelectorCurrentPage,
  makeSelectorTotal,
};
