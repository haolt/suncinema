import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import PersonalInformation from 'components/PersonalInformation';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPersonalPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { sendGetUserInfoRequest } from './actions';

export function PersonalPage(props) {
  useInjectReducer({ key: 'personalPage', reducer });
  useInjectSaga({ key: 'personalPage', saga });
  useEffect(() => {
    props.sendGetUserInfoRequest();
  }, []);
  return (
    <div>
      <Helmet>
        <title>PersonalPage</title>
        <meta name="description" content="Description of PersonalPage" />
      </Helmet>
      <PersonalInformation user={props.personalPage} />
    </div>
  );
}

PersonalPage.propTypes = {
  sendGetUserInfoRequest: PropTypes.func.isRequired,
  personalPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  personalPage: makeSelectPersonalPage(),
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
