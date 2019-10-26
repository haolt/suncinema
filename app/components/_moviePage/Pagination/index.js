/* eslint-disable no-var */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';
import useStyles from './useStyles';

const goPrev = () => {};
const goNext = () => {};

function Pagination(props) {
  const classes = useStyles();
  const { total } = props;
  const pageTotal = Math.ceil(total / 10);

  return (
    <Paper className={classes.root}>
      <ButtonGroup size="small">
        <Button onClick={goPrev}>Prev</Button>
        <Button>1</Button>
        <Button>...</Button>
        <Button>{pageTotal}</Button>
        <Button onClick={goNext}>Next</Button>
      </ButtonGroup>
    </Paper>
  );
}

Pagination.propTypes = {
  // curentPage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Pagination;
