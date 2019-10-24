import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRegisterPageDomain = state => state.registerPage || initialState;

const makeSelectRegisterPage = () =>
  createSelector(
    selectRegisterPageDomain,
    substate => substate,
  );

const makeSelectEmail = () =>
  createSelector(
    selectRegisterPageDomain,
    substate => substate.email,
  );

const makeSelectPassword = () =>
  createSelector(
    selectRegisterPageDomain,
    substate => substate.password,
  );
const makeSelectName = () =>
  createSelector(
    selectRegisterPageDomain,
    substate => substate.name,
  );
const makeSelectPasswordConfirmation = () =>
  createSelector(
    selectRegisterPageDomain,
    substate => substate.password_confirmation,
  );
const makeSelectRegisterStatus = () =>
  createSelector(
    selectRegisterPageDomain,
    substate => substate.isRegisterSuccess,
  );

const makeSelectEmailError = () =>
  createSelector(
    selectRegisterPageDomain,
    substate => substate.emailError,
  );

const makeSelectPasswordError = () =>
  createSelector(
    selectRegisterPageDomain,
    substate => substate.passwordError,
  );
const makeSelectNameError = () =>
  createSelector(
    selectRegisterPageDomain,
    substate => substate.nameError,
  );

export default makeSelectRegisterPage;
export {
  selectRegisterPageDomain,
  makeSelectName,
  makeSelectEmail,
  makeSelectPassword,
  makeSelectPasswordConfirmation,
  makeSelectRegisterStatus,
  makeSelectNameError,
  makeSelectEmailError,
  makeSelectPasswordError,
};
