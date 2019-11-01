import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the appContainer state domain
 */

const selectAppContainerDomain = state => state.appContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AppContainer
 */

const makeSelectAppContainer = () =>
  createSelector(
    selectAppContainerDomain,
    substate => substate,
  );

export default makeSelectAppContainer;
export { selectAppContainerDomain };
