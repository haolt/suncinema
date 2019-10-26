/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import MovieItem from 'components/_moviePage/MovieItem';

function MovieList(props) {
  const { movies, type } = props;
  return (
    <Grid container spacing={3}>
      {movies
        ? movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} type={type} />
        ))
        : ''}
    </Grid>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  type: PropTypes.string,
};

export default MovieList;
