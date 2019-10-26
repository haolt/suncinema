import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDiscoverPageDomain = state => state.discoverPage || initialState;

const makeSelectDiscoverPage = () =>
  createSelector(
    selectDiscoverPageDomain,
    substate => substate,
  );
const makeSelectOrder = () =>
  createSelector(
    selectDiscoverPageDomain,
    substate => substate.order,
  );
const makeSelectSort = () =>
  createSelector(
    selectDiscoverPageDomain,
    substate => substate.sort,
  );
const makeSelectPage = () =>
  createSelector(
    selectDiscoverPageDomain,
    substate => substate.page,
  );
const makeSelectMovies = () =>
  createSelector(
    selectDiscoverPageDomain,
    substate => substate.movies,
  );
export default makeSelectDiscoverPage;
export {
  selectDiscoverPageDomain,
  makeSelectOrder,
  makeSelectSort,
  makeSelectPage,
  makeSelectMovies,
};
