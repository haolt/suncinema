/**
 *
 * MovieDetailPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
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
import {
  makeSelectorCurrentMovie,
  makeSelectorHasRequestDone,
} from './selectors';

export function MovieDetailPage(props) {
  useInjectReducer({ key: 'movieDetailPage', reducer });
  useInjectSaga({ key: 'movieDetailPage', saga });
  useEffect(() => {
    const currentID = props.match.params.id;
    props.sendGetAMovieRequest(currentID);
  }, []);
  return (
    <div>
      <Helmet>
        <title>MovieDetailPage</title>
        <meta name="description" content="Description of MovieDetailPage" />
      </Helmet>
      <MovieDetail
        currentMovie={props.currentMovie}
        hasRequestDone={props.hasRequestDone}
      />
    </div>
  );
}

MovieDetailPage.propTypes = {
  sendGetAMovieRequest: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  currentMovie: PropTypes.object.isRequired,
  hasRequestDone: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currentMovie: makeSelectorCurrentMovie(),
  hasRequestDone: makeSelectorHasRequestDone(),
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
