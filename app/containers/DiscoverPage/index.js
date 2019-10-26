import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import DiscoverMovie from 'components/_discoverPage/DiscoverMovie';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectMovies } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { sendSortMovieRequest } from './actions';

export function DiscoverPage(props) {
  useInjectReducer({ key: 'discoverPage', reducer });
  useInjectSaga({ key: 'discoverPage', saga });

  useEffect(() => {
    props.sendSortMovieRequest({
      sort: 2,
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>DiscoverPage</title>
        <meta name="description" content="Description of DiscoverPage" />
      </Helmet>
      <DiscoverMovie
        movies={props.movies}
        sendSortMovieRequest={props.sendSortMovieRequest}
      />
    </div>
  );
}

DiscoverPage.propTypes = {
  sendSortMovieRequest: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  movies: makeSelectMovies(),
});

function mapDispatchToProps(dispatch) {
  return {
    sendSortMovieRequest: options => dispatch(sendSortMovieRequest(options)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DiscoverPage);
