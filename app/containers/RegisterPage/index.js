/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import FlexWrapper from 'components/_layouts/FlexWrapper';
import RegisterForm from 'components/_authPages/RegisterForm';

import reducer from './reducer';
import saga from './saga';
import { sendRegisterRequest } from './actions';
import {
  makeSelectRegisterStatus,
  makeSelectNameError,
  makeSelectEmailError,
  makeSelectPasswordError,
} from './selectors';

export function RegisterPage(props) {
  useInjectReducer({ key: 'registerPage', reducer });
  useInjectSaga({ key: 'registerPage', saga });
  if (props.isRegisterSuccess) {
    if (
      window.confirm(
        'Congrat ! You register successfully. Do you wanna login right now?',
      )
    ) {
      props.history.push('/login');
    } else {
      props.history.push('/');
    }
  }
  return (
    <div>
      <Helmet>
        <title>RegisterPage</title>
        <meta name="description" content="Description of RegisterPage" />
      </Helmet>
      <FlexWrapper>
        <RegisterForm
          sendRegisterRequest={props.sendRegisterRequest}
          emailError={props.emailError}
          passwordError={props.passwordError}
          nameError={props.nameError}
        />
      </FlexWrapper>
    </div>
  );
}

RegisterPage.propTypes = {
  sendRegisterRequest: PropTypes.func.isRequired,
  history: PropTypes.object,
  passwordError: PropTypes.array,
  emailError: PropTypes.array,
  nameError: PropTypes.array,
  isRegisterSuccess: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isRegisterSuccess: makeSelectRegisterStatus(),
  nameError: makeSelectNameError(),
  emailError: makeSelectEmailError(),
  passwordError: makeSelectPasswordError(),
});

function mapDispatchToProps(dispatch) {
  return {
    sendRegisterRequest: user => dispatch(sendRegisterRequest(user)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(RegisterPage);
