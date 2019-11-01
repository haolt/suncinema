/* eslint-disable prettier/prettier */
import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { getCookie } from 'services/cookie';
import { ACCESS_TOKEN } from 'commons/constants';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import FlexWrapperLP from 'components/_layouts/FlexWrapperLP';
import LoginForm from 'components/_authPages/LoginForm';

import { sendLoginRequest, resetError } from './actions';
import {
  makeSelectLoginStatus,
  makeSelectEmailError,
  makeSelectPasswordError,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

export function LoginPage(props) {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });
  if ((props.isLoginSuccess && getCookie(ACCESS_TOKEN)) || getCookie(ACCESS_TOKEN)) {
    props.history.push('/');
  }
  useEffect(
    () => () => {
      props.resetError();
    },
    [],
  );
  return (
    <div>
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="Description of LoginPage" />
      </Helmet>
      <FlexWrapperLP>
        <LoginForm
          sendLoginRequest={props.sendLoginRequest}
          emailError={props.emailError}
          passwordError={props.passwordError}
          error={props.error}
        />
      </FlexWrapperLP>
    </div>
  );
}

LoginPage.propTypes = {
  error: PropTypes.string,
  passwordError: PropTypes.array,
  emailError: PropTypes.array,
  isLoginSuccess: PropTypes.bool.isRequired,
  sendLoginRequest: PropTypes.func.isRequired,
  resetError: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  isLoginSuccess: makeSelectLoginStatus(),
  emailError: makeSelectEmailError(),
  passwordError: makeSelectPasswordError(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    sendLoginRequest: user => dispatch(sendLoginRequest(user)),
    resetError: () => dispatch(resetError()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginPage);
