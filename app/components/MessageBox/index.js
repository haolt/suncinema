import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import useStyles from './useStyles';

function MessageBox() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        View profile only that you loged in successfully. Login right now?
      </Typography>
      <div className={classes.btns}>
        <Link to="/movies" className={classes.btn}>
          <Button variant="contained" color="primary">
            Back to Movies
          </Button>
        </Link>
        <Link to="/login" className={classes.btn}>
          <Button variant="contained" color="secondary">
            Login now
          </Button>
        </Link>
      </div>
    </Paper>
  );
}

MessageBox.propTypes = {};

export default MessageBox;
