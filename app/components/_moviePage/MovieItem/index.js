/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import defaultBanner from 'images/movie/defaultbanner.jpg';
import defaultBannerDiscover from 'images/movie/defaultbanner-discover.jpg';
import useStyles from './useStyles';
import './styles.css';
function MovieItem(props) {
  const classes = useStyles();
  const { movie, type } = props;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link to={`movies/${movie.id}`}>
        <Paper className={classes.paper}>
          <div className="container">
            {
              type ? (
                <img
                  alt={movie.title}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : defaultBannerDiscover
                  }
                  className="movieImg"
                />
              ) : (
                <img
                  alt={movie.title}
                  src={
                    movie.backdrop_path
                      ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                      : defaultBanner
                  }
                  className="movieImg"
                />
              )
            }
            <div className="gradient" />
            <div className="square" />
            <div className="title">{movie.title}</div>
          </div>
          <div className="genres">
            {movie.genres
              ? movie.genres.length > 0 &&
                movie.genres.map(genre => (
                  <span key={genre.id} className="genres__item">
                    {genre.name}
                  </span>
                ))
              : ''}
          </div>
        </Paper>
      </Link>
    </Grid>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
  type: PropTypes.string,
};

export default MovieItem;
