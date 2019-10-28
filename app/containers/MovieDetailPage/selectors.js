import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMovieDetailPageDomain = state =>
  state.movieDetailPage || initialState;

const makeSelectMovieDetailPage = () =>
  createSelector(
    selectMovieDetailPageDomain,
    substate => substate,
  );

const makeSelectorCurrentID = () =>
  createSelector(
    selectMovieDetailPageDomain,
    substate => substate.currentID,
  );

const makeSelectorCurrentMovie = () =>
  createSelector(
    selectMovieDetailPageDomain,
    substate => substate.currentMovie,
  );
const makeSelectorHasRequestDone = () =>
  createSelector(
    selectMovieDetailPageDomain,
    substate => substate.hasRequestDone,
  );
export default makeSelectMovieDetailPage;
export {
  selectMovieDetailPageDomain,
  makeSelectorCurrentID,
  makeSelectorCurrentMovie,
  makeSelectorHasRequestDone,
};
