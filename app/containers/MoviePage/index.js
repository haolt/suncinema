/* eslint-disable react/prop-types */
import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import MovieCategories from 'components/_moviePage/MovieCategories';
import MovieList from 'components/_moviePage/MovieList';
import FlexWrapper from 'components/_layouts/FlexWrapper';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectMovies,
  makeSelectPage,
  makeSelectPageTotal,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { sendSortMovieRequest } from './actions';
import Pagination from '../../components/_moviePage/Pagination';

// export function MoviePage(props) {
export function MoviePage(props) {
  useInjectReducer({ key: 'moviePage', reducer });
  useInjectSaga({ key: 'moviePage', saga });

  useEffect(() => {
    props.sendSortMovieRequest({
      sort: 1,
      page: 1,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>DiscoverPage</title>
        <meta name="description" content="Description of DiscoverPage" />
      </Helmet>
      <MovieCategories sendSortMovieRequest={props.sendSortMovieRequest} />
      <MovieList movies={props.movies} />
      <FlexWrapper>
        <Pagination
          curentPage={props.page}
          pageTotal={props.pageTotal}
          sendSortMovieRequest={props.sendSortMovieRequest}
        />
      </FlexWrapper>
    </>
  );
}

MoviePage.propTypes = {
  sendSortMovieRequest: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  pageTotal: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  movies: makeSelectMovies(),
  page: makeSelectPage(),
  pageTotal: makeSelectPageTotal(),
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
)(MoviePage);
