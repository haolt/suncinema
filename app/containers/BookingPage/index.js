import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectBookingPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export function BookingPage() {
  useInjectReducer({ key: 'bookingPage', reducer });
  useInjectSaga({ key: 'bookingPage', saga });

  return (
    <div>
      <Helmet>
        <title>BookingPage</title>
        <meta name="description" content="Description of BookingPage" />
      </Helmet>
      BookingPage
    </div>
  );
}

BookingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  bookingPage: makeSelectBookingPage(),
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

export default compose(
  withConnect,
  memo,
)(BookingPage);
