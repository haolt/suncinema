import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { sendGetUserInfoRequest } from 'containers/PersonalPage/actions';
import watchPersonalPageSaga from 'containers/PersonalPage/saga';

import UpdateUserForm from 'components/_personalPage/UpdateUserForm';
import reducer from './reducer';
import saga from './saga';
import { sendUpdateUserRequest } from './actions';

export function UpdateUser(props) {
  useInjectReducer({ key: 'updateUser', reducer });
  useInjectSaga(
    { key: 'updateUser', saga },
    { key: 'personalPage', watchPersonalPageSaga },
  );
  return (
    <UpdateUserForm
      user={props.user}
      handleCloseDialoge={props.handleCloseDialoge}
      sendUpdateUserRequest={props.sendUpdateUserRequest}
      sendGetUserInfoRequest={props.sendGetUserInfoRequest}
    />
  );
}

UpdateUser.propTypes = {
  sendUpdateUserRequest: PropTypes.func.isRequired,
  sendGetUserInfoRequest: PropTypes.func.isRequired,
  handleCloseDialoge: PropTypes.func,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    sendUpdateUserRequest: user => dispatch(sendUpdateUserRequest(user)),
    sendGetUserInfoRequest: () => dispatch(sendGetUserInfoRequest()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(UpdateUser);
