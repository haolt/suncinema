/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const showCountResult = count => {
  switch (count) {
    case 0:
      return <span>No result.</span>;
    case 1:
      return <span>1 result.</span>;
    case -1:
      return '';
    default:
      return <span>{count} results.</span>;
  }
};

function CountResult(props) {
  return <> {showCountResult(props.resultCount)} </>;
}

CountResult.propTypes = {
  resultCount: PropTypes.number.isRequired,
};

export default CountResult;
