import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import useStyles from './useStyles';
import './styles.css';

function MovieItem(props) {
  const classes = useStyles();
  const { movie } = props;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link to={`movies/${movie.id}`}>
        <Paper className={classes.paper}>
          <div className="container">
            <img
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              className="layer1"
            />
            <div className="xam" />
            <div className="gradient" />
            <div className="hinhvuong" />
            <div className="chuto">{movie.title}</div>
            {/* <div className="chunho">Lorem is raput nhus via facebook.com</div> */}
          </div>
          <div className="genres">
            {movie.genres.length > 0 &&
              movie.genres.map(genre => (
                <span key={genre.id} className="genres__item">
                  {genre.name}
                </span>
              ))}
          </div>
        </Paper>
      </Link>
    </Grid>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
