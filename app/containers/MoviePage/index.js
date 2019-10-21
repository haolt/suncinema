/* eslint-disable no-console */
import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import MovieList from 'components/_moviePage/MovieList';

import reducer from './reducer';
import saga from './saga';

import { sendGetMovieRequest } from './actions';
import {
  makeSelectorMovies,
  makeSelectorCurrentPage,
  makeSelectorTotal,
} from './selectors';

export function MoviePage(props) {
  useInjectReducer({ key: 'moviePage', reducer });
  useInjectSaga({ key: 'moviePage', saga });

  const { movies } = props;
  useEffect(() => {
    props.sendGetMovieRequest();
  }, []);
  // console.log('In MoviePage Container: ', movies);
  return (
    <div>
      <Helmet>
        <title>Movies</title>
        <meta name="description" content="Description of MoviePage" />
      </Helmet>
      <MovieList movies={movies} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  movies: makeSelectorMovies(),
  curentPage: makeSelectorCurrentPage(),
  total: makeSelectorTotal(),
});
function mapDispatchToProps(dispatch) {
  return {
    sendGetMovieRequest: () => dispatch(sendGetMovieRequest()),
  };
}

MoviePage.propTypes = {
  movies: PropTypes.array.isRequired,
  // curentPage: PropTypes.number.isRequired,
  // total: PropTypes.number.isRequired,
  sendGetMovieRequest: PropTypes.func.isRequired,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MoviePage);
