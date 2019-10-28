/**
 *
 * ChangePassword
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ChangePasswordForm from 'components/_personalPage/ChangePasswordForm';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectChangePassword from './selectors';
import reducer from './reducer';
import saga from './saga';

export function ChangePassword() {
  useInjectReducer({ key: 'changePassword', reducer });
  useInjectSaga({ key: 'changePassword', saga });

  return <ChangePasswordForm />;
}

ChangePassword.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  changePassword: makeSelectChangePassword(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ChangePassword);
