import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDiscoverPageDomain = state => state.discoverPage || initialState;

const makeSelectDiscoverPage = () =>
  createSelector(
    selectDiscoverPageDomain,
    substate => substate,
  );
const makeSelectKeywords = () =>
  createSelector(
    selectDiscoverPageDomain,
    substate => substate.keywords,
  );
const makeSelectMovies = () =>
  createSelector(
    selectDiscoverPageDomain,
    substate => substate.movies,
  );
const makeSelectResultCount = () =>
  createSelector(
    selectDiscoverPageDomain,
    substate => substate.resultCount,
  );
const makeSelectHasRequestDone = () =>
  createSelector(
    selectDiscoverPageDomain,
    substate => substate.hasRequestDone,
  );
export default makeSelectDiscoverPage;
export {
  selectDiscoverPageDomain,
  makeSelectKeywords,
  makeSelectMovies,
  makeSelectResultCount,
  makeSelectHasRequestDone,
};
