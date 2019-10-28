import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Grid from '@material-ui/core/Grid';
import PersonalInformation from 'components/_personalPage/PersonalInformation';
import FlexWrapperLP from 'components/_layouts/FlexWrapperLP';
import MessageBox from 'components/MessageBox';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { getCookie } from 'services/cookie';
import { ACCESS_TOKEN } from 'commons/constants';

import { makeSelectLoginStatus } from 'containers/LoginPage/selectors';
// import { makeSelectHasUpdatedSuccess } from 'containers/UpdateUser/selectors';

import makeSelectPersonalPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { sendGetUserInfoRequest } from './actions';

export function PersonalPage(props) {
  useInjectReducer({ key: 'personalPage', reducer });
  useInjectSaga({ key: 'personalPage', saga });

  useEffect(() => {
    if ((props.isLoginSuccess && getCookie(ACCESS_TOKEN)) || getCookie(ACCESS_TOKEN)) {
      props.sendGetUserInfoRequest();
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>PersonalPage</title>
        <meta name="description" content="Description of PersonalPage" />
      </Helmet>
      {((props.isLoginSuccess && getCookie(ACCESS_TOKEN)) || getCookie(ACCESS_TOKEN)) ? (
        <PersonalInformation user={props.personalPage} />
      ) : (
        <FlexWrapperLP>
          <MessageBox />
        </FlexWrapperLP>
      )}
    </div>
  );
}

PersonalPage.propTypes = {
  sendGetUserInfoRequest: PropTypes.func.isRequired,
  personalPage: PropTypes.object,
  isLoginSuccess: PropTypes.bool.isRequired,
  // isUpdateSuccess: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  personalPage: makeSelectPersonalPage(),
  isLoginSuccess: makeSelectLoginStatus(),
  // isUpdateSuccess: makeSelectHasUpdatedSuccess(),
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
