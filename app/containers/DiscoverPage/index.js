/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CircularProgress from '@material-ui/core/CircularProgress';

import Advertisement from 'components/Advertisement';
import CountResult from 'components/CountResult';
import SearchOptions from 'components/_discoverPage/SearchOptions';
import MovieList from 'components/_moviePage/MovieList';
import FlexWrapper from 'components/_layouts/FlexWrapper';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectMovies,
  makeSelectResultCount,
  makeSelectHasRequestDone,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { sendSearchMovieRequest } from './actions';

const type = 'discoverPage';

export function DiscoverPage(props) {
  useInjectReducer({ key: 'discoverPage', reducer });
  useInjectSaga({ key: 'discoverPage', saga });
  console.log('CONTAINER: ', props.movies);
  return (
    <>
      <Helmet>
        <title>Discover Page</title>
        <meta name="description" content="Description of DiscoverPage" />
      </Helmet>
      <Advertisement />
      <SearchOptions sendSearchMovieRequest={props.sendSearchMovieRequest} />
      {props.hasRequestDone ? (
        <>
          <FlexWrapper>
            <CountResult resultCount={props.resultCount} />
          </FlexWrapper>
          <MovieList
            movies={props.movies}
            type={type}
          />
        </>
      ) : (
        <FlexWrapper>
          <CircularProgress color="secondary" />
        </FlexWrapper>
      )}
    </>
  );
}

DiscoverPage.propTypes = {
  sendSearchMovieRequest: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  resultCount: PropTypes.number.isRequired,
  hasRequestDone: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  movies: makeSelectMovies(),
  resultCount: makeSelectResultCount(),
  hasRequestDone: makeSelectHasRequestDone(),
});

function mapDispatchToProps(dispatch) {
  return {
    sendSearchMovieRequest: options =>
      dispatch(sendSearchMovieRequest(options)),
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
