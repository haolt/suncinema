import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import PersonalInformation from 'components/PersonalInformation';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { getCookie } from 'services/cookie';
import { ACCESS_TOKEN } from 'commons/constants';

// import reducerLogin from 'containers/LoginPage/reducer';
import { makeSelectLoginStatus } from 'containers/LoginPage/selectors';

import makeSelectPersonalPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { sendGetUserInfoRequest } from './actions';

export function PersonalPage(props) {
  useInjectReducer({ key: 'personalPage', reducer });
  useInjectSaga({ key: 'personalPage', saga });

  useEffect(() => {
    if (props.isLoginSuccess && getCookie(ACCESS_TOKEN)) {
      props.sendGetUserInfoRequest();
    }
  }, []);
  return (
    <div>
      <Helmet>
        <title>PersonalPage</title>
        <meta name="description" content="Description of PersonalPage" />
      </Helmet>
      {props.isLoginSuccess && getCookie(ACCESS_TOKEN) ? (
        <PersonalInformation user={props.personalPage} />
      ) : (
        'Login đuê !'
      )}
    </div>
  );
}

PersonalPage.propTypes = {
  sendGetUserInfoRequest: PropTypes.func.isRequired,
  personalPage: PropTypes.object,
  isLoginSuccess: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  personalPage: makeSelectPersonalPage(),
  isLoginSuccess: makeSelectLoginStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    sendGetUserInfoRequest: () => dispatch(sendGetUserInfoRequest()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PersonalPage);
