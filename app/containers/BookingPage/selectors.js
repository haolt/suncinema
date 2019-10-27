import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectBookingPageDomain = state => state.bookingPage || initialState;

const makeSelectBookingPage = () =>
  createSelector(
    selectBookingPageDomain,
    substate => substate,
  );
const makeSelectBookableSeat = () =>
  createSelector(
    selectBookingPageDomain,
    substate => substate.bookableSeat,
  );
const makeSelectUpdatedAt = () =>
  createSelector(
    selectBookingPageDomain,
    substate => substate.updatedAt,
  );
const makeSelectorMovieID = () =>
  createSelector(
    selectBookingPageDomain,
    substate => substate.movieID,
  );
export default makeSelectBookingPage;
export {
  selectBookingPageDomain,
  makeSelectBookableSeat,
  makeSelectUpdatedAt,
  makeSelectorMovieID,
};
