/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TheatersIcon from '@material-ui/icons/Theaters';
import Button from '@material-ui/core/Button';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import useStyles from './useStyles';

function MovieDetail(props) {
  const classes = useStyles();
  const {
    id,
    title,
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
              className={classes.viewImg}
              alt={title}
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            />
          </Paper>
        </Grid>
        <Grid item md={7} xs={12}>
          <Paper className={classes.view}>
            <div>
              <Typography variant="h3" gutterBottom className={classes.title}>
                {title}
              </Typography>
              <Typography variant="subtitle3" className={classes.overview}>{overview}</Typography>
              <div className={classes.flexStart}>
                <Link to="/movies" className={classes.btn}>
                  <Button variant="contained" color="action">
                    Discover more
                  </Button>
                </Link>
                <Link to={`/booking/${id}`} className={classes.btn}>
                  <Button variant="contained" color="secondary">
                    Book now
                  </Button>
                </Link>
              </div>
            </div>
            <div className={classes.flexStart}>
              <div className={classes.quantity}>
                <IconButton title="Favorite">
                  <FavoriteIcon />
                </IconButton>
                {vote_count && vote_count}
              </div>
              <div className={classes.quantity}>
                <IconButton title="Create At">
                  <TheatersIcon />
                </IconButton>
                {created_at && created_at.substring(0, 10)
                  .split('-')
                  .reverse()
                  .join('/')}
                {/* {vote_average && vote_average} */}
              </div>
              <div className={classes.quantity}>
                <IconButton title="Popularity">
                  <SupervisedUserCircleIcon />
                </IconButton>
                {popularity && `${Math.ceil(popularity)} points`}
              </div>
            </div>
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
