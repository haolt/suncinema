/* eslint-disable no-alert */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
/* eslint-disable prettier/prettier */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import entrance from 'images/booking/entrance.png';
import useStyles from './useStyles';
import Seat from './Seat';
import { seatStatus, seatNameRow, seatNameColumn } from './constants';

const bookingSeat = (x, y) => {
  alert(`x = ${x}, y = ${y}`)
}

function SeatSystem(props) {
  const classes = useStyles();
  const { bookableSeats } = props;
  const row = bookableSeats.length;
  const column = bookableSeats[0].length;
  return (
    <Grid container spacing={5} className={classes.seatNet}>
      <Grid item xs={1} sm={1}>
        <img src={entrance} alt="entrance" title="Entrance" />
      </Grid>
      <Grid item xs={11} sm={7} className={classes.col}>
        {
          row && column
            ? (
              bookableSeats.map((bookableRow, index) => (
                <div key={index} className={classes.row}>
                  {
                    bookableSeats[index].map((seat,_index) => (
                      <Seat
                        key={_index}
                        bgColor={ seat === 'null' ? 'green' : '#333'}
                        type="button"
                        title={`${seatNameRow[index]}${seatNameColumn[_index]}`}
                        disabled={seat !== 'null'}
                        onClick={() => bookingSeat(index, _index)}
                      >
                        {`${seatNameRow[index]}${seatNameColumn[_index]}`}
                      </Seat>))
                  }
                </div>
              ))
            )
            : ''
        }
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
          <Typography variant="h5" gutterBottom>
              Reference:
          </Typography>
          {seatStatus.map(seat =>
            <div key={seat.id} className={classes.statusList}>
              <Seat bgColor={seat.color} />
              <span className={classes.statusTitle}>{seat.title }</span>
            </div>)}
        </Paper>
        <p>(*)Update at {props.updateAt}.</p>
      </Grid>
    </Grid>
  );
}

SeatSystem.propTypes = {
  bookableSeats: PropTypes.array.isRequired,
  updateAt: PropTypes.string.isRequired,
};

export default SeatSystem;
