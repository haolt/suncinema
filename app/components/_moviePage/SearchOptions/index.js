/* eslint-disable no-console */
import React from 'react';
// import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import InputLabel from '@material-ui/core/InputLabel';
// import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useStyles from './useStyles';

function SearchOptions() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    keywords: '',
    order: '',
    sort: '',
  });

  const handleChange = field => event => {
    setValues({ ...values, [field]: event.target.value });
  };
  const handleChangeAdvanced = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };
  // console.log(values);
  return (
    <>
      <Paper className={classes.root}>
        <TextField
          id="keywords"
          name="keywords"
          className={classes.textField}
          placeholder="Search movies"
          onChange={handleChange('keywords')}
        />
      </Paper>
      <ExpansionPanel className={classes.advanceOptions}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          className={classes.advanceItem}
        />
        <ExpansionPanelDetails className={classes.advanceItem}>
          {/* <Select
            value={values.order}
            onChange={handleChangeAdvanced}
            name="order"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select> */}
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="order" className={classes.label}>
              Order by
            </InputLabel>
            <Select
              value={values.order}
              onChange={handleChangeAdvanced}
              name="order"
              id="order"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value={1}>Desc</MenuItem>
              <MenuItem value={1}>Asc</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="sort" className={classes.label}>
              Sort by
            </InputLabel>
            <Select
              value={values.sort}
              onChange={handleChangeAdvanced}
              name="sort"
              id="sort"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value={1}>Sort_by_popularity</MenuItem>
              <MenuItem value={2}>Sort_by_release_date</MenuItem>
              <MenuItem value={3}>sort_by_vote</MenuItem>
            </Select>
          </FormControl>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
}

SearchOptions.propTypes = {};

export default SearchOptions;
