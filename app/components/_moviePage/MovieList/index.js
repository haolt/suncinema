/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import MovieItem from 'components/_moviePage/MovieItem';
import useStyles from './useStyles';

function MovieList(props) {
  const { movies, type } = props;
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.container}>
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
