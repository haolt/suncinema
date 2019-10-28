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

const makeSelectOrder = () =>
  createSelector(
    selectMoviePageDomain,
    substate => substate.order,
  );
const makeSelectSort = () =>
  createSelector(
    selectMoviePageDomain,
    substate => substate.sort,
  );
const makeSelectPage = () =>
  createSelector(
    selectMoviePageDomain,
    substate => substate.page,
  );
const makeSelectPageTotal = () =>
  createSelector(
    selectMoviePageDomain,
    substate => substate.pageTotal,
  );
const makeSelectHasRequestDone = () =>
  createSelector(
    selectMoviePageDomain,
    substate => substate.hasRequestDone,
  );
const makeSelectMovies = () =>
  createSelector(
    selectMoviePageDomain,
    substate => substate.movies,
  );

export default makeSelectMoviePage;
export {
  selectMoviePageDomain,
  makeSelectOrder,
  makeSelectSort,
  makeSelectPage,
  makeSelectPageTotal,
  makeSelectMovies,
  makeSelectHasRequestDone,
};
