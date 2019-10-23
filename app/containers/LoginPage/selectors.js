import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLoginPageDomain = state => state.loginPage || initialState;

const makeSelectLoginPage = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate,
  );

const makeSelectEmail = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.email,
  );

const makeSelectPassword = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.password,
  );
const makeSelectLoginStatus = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.isLoginSuccess,
  );

const makeSelectEmailError = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.emailError,
  );

const makeSelectPasswordError = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.passwordError,
  );

const makeSelectError = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.error,
  );

export default makeSelectLoginPage;
export {
  selectLoginPageDomain,
  makeSelectEmail,
  makeSelectPassword,
  makeSelectLoginStatus,
  makeSelectEmailError,
  makeSelectPasswordError,
  makeSelectError,
};
