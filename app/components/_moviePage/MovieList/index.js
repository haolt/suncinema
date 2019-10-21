import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import MovieItem from 'components/_moviePage/MovieItem';

function MovieList(props) {
  const { movies } = props;
  return (
    <Grid container spacing={3}>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </Grid>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
