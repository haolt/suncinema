/* eslint-disable prettier/prettier */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */
/* eslint-disable no-var */
/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class Pagination extends Component {
  state = {
    page: this.props.curentPage || 1,
  };

  goFirstOrLast = number => {
    // 0: first, 1: last
    this.setState({ page: number ? this.props.pageTotal : 1 }, function() {
      this.props.sendSortMovieRequest({ page: this.state.page })
    });
  };

  goPrev = () => {
    this.setState(previousState => {
      return {
        ...previousState,
        page: previousState.page > 1 ? previousState.page - 1 : 1,
      };
    }, function() {
      this.props.sendSortMovieRequest({ page: this.state.page })
    });
  };

  goNext = () => {
    this.setState(previousState => ({
      ...previousState,
      page:
        previousState.page < this.props.pageTotal
          ? previousState.page + 1
          : this.props.pageTotal,
    }), function() {
      this.props.sendSortMovieRequest({ page: this.state.page })
    });
  };

  handleChange(event) {
    const sltPage = parseInt(event.target.value, 10);
    if (sltPage > 0 && sltPage <= this.props.pageTotal) {
      this.setState({ page: sltPage }, function() {
        this.props.sendSortMovieRequest({ page: this.state.page })
      });
    }
  }

  render() {
    const { pageTotal, classes } = this.props;
    const { page } = this.state;
    return (
      <>
        <Button onClick={() => this.goFirstOrLast(0)}>❮❮</Button>
        <Button onClick={this.goPrev}>❮</Button>
        <input
          className={classes.sltPage}
          type="number"
          value={page}
          onChange={event => this.handleChange(event)}
        />
        of {pageTotal}
        <Button onClick={this.goNext}>❯</Button>
        <Button onClick={() => this.goFirstOrLast(1)}>❯❯</Button>
      </>
    );
  }
}
export default withStyles(styles)(Pagination);

Pagination.propTypes = {
  pageTotal: PropTypes.number.isRequired,
  sendSortMovieRequest: PropTypes.func.isRequired,
};
