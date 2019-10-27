import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectUpdateUserDomain = state => state.updateUser || initialState;

const makeSelectUpdateUser = () =>
  createSelector(
    selectUpdateUserDomain,
    substate => substate,
  );
const makeSelectUpdatedUser = () =>
  createSelector(
    selectUpdateUserDomain,
    substate => substate.updatedUser,
  );
const makeSelectHasUpdatedSuccess = () =>
  createSelector(
    selectUpdateUserDomain,
    substate => substate.hasUpdatedSuccess,
  );

export default makeSelectUpdateUser;
export {
  selectUpdateUserDomain,
  makeSelectUpdatedUser,
  makeSelectHasUpdatedSuccess,
};
