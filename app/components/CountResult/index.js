import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const showCountResult = count => {
  switch (count) {
    case 0:
      return <Typography variant="subtitle2" gutterBottom>No result</Typography>
    case 1:
      return <Typography variant="subtitle2" gutterBottom>1 result</Typography>
    case -1:
      return '';
    default:
      return <Typography variant="subtitle2" gutterBottom>{count} results.</Typography>;
  }
};

function CountResult(props) {
  return <> {showCountResult(props.resultCount)} </>;
}

CountResult.propTypes = {
  resultCount: PropTypes.number.isRequired,
};

export default CountResult;
