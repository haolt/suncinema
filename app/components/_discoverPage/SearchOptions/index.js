/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useStyles from './useStyles';

function SearchOptions(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    keywords: '',
  });

  const handleChange = field => event => {
    setValues({ ...values, [field]: event.target.value });
    props.sendSearchMovieRequest(event.target.value);
  };
  return (
    <Paper className={classes.root}>
      <TextField
        id="keywords"
        name="keywords"
        className={classes.textField}
        placeholder="Search hot movies"
        onChange={handleChange('keywords')}
      />
    </Paper>
  );
}

SearchOptions.propTypes = {
  sendSearchMovieRequest: PropTypes.func.isRequired,
};

export default SearchOptions;
