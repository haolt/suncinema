import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';

function MovieDetail(props) {
  const classes = useStyles();
  const {
    title,
    backdrop_path,
    created_at,
    genres,
    is_feature_movie,
    overview,
    popularity,
    poster_path,
    release_date,
    updated_at,
    vote_average,
    vote_count,
  } = props.currentMovie;
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={5}>
        <Grid item md={5} xs={12}>
          <Paper className={classes.view}>
            <img
              alt={title}
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            />
          </Paper>
        </Grid>
        <Grid item md={7} xs={12}>
          <Paper className={classes.view}>
            <Typography variant="h3" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {overview}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}

MovieDetail.propTypes = {
  currentMovie: PropTypes.object,
};

export default MovieDetail;

