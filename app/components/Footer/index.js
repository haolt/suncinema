import React from 'react';
import Paper from '@material-ui/core/Paper';
import useStyles from './useStyles';

function Footer() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      Copyright by Haochan
    </Paper>
  );
}

Footer.propTypes = {};

export default Footer;
