/* eslint-disable react/prop-types */
/**
 *
 * MovieDetailPage
 *
 */

import React, { memo, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import MovieDetail from 'components/MovieDetail';
import reducer from './reducer';
import saga from './saga';
import { sendGetAMovieRequest } from './actions';
import { makeSelectorCurrentMovie } from './selectors';

export function MovieDetailPage(props) {
  useInjectReducer({ key: 'movieDetailPage', reducer });
  useInjectSaga({ key: 'movieDetailPage', saga });
  useEffect(() => {
    const currentID = props.match.params.id;
    // console.log(currentID);
    props.sendGetAMovieRequest(currentID);
  }, []);
  return (
    <div>
      <Helmet>
        <title>MovieDetailPage</title>
        <meta name="description" content="Description of MovieDetailPage" />
      </Helmet>
      <MovieDetail currentMovie={props.currentMovie} />
    </div>
  );
}

MovieDetailPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currentMovie: makeSelectorCurrentMovie(),
});

function mapDispatchToProps(dispatch) {
  return {
    sendGetAMovieRequest: id => dispatch(sendGetAMovieRequest(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MovieDetailPage);
