/* eslint-disable no-console */
import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import SeatSystem from 'components/_bookingPage/SeatSystem';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectBookableSeat, makeSelectUpdatedAt } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { sendGetBookableSeatRequest } from './actions';

export function BookingPage(props) {
  useInjectReducer({ key: 'bookingPage', reducer });
  useInjectSaga({ key: 'bookingPage', saga });
  useEffect(() => {
    const movieID = props.match.params.id;
    props.sendGetBookableSeatRequest(movieID);
  }, []);
  return (
    <div>
      <Helmet>
        <title>BookingPage</title>
        <meta name="description" content="Description of BookingPage" />
      </Helmet>
      <SeatSystem
        bookableSeats={props.bookableSeats}
        updateAt={props.updateAt}
      />
    </div>
  );
}

BookingPage.propTypes = {
  sendGetBookableSeatRequest: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  bookableSeats: PropTypes.array.isRequired,
  updateAt: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  updateAt: makeSelectUpdatedAt(),
  bookableSeats: makeSelectBookableSeat(),
});

function mapDispatchToProps(dispatch) {
  return {
    sendGetBookableSeatRequest: id => dispatch(sendGetBookableSeatRequest(id)),
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
