/**
 *
 * DiscoverPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDiscoverPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export function DiscoverPage() {
  useInjectReducer({ key: 'discoverPage', reducer });
  useInjectSaga({ key: 'discoverPage', saga });

  return (
    <div>
      <Helmet>
        <title>DiscoverPage</title>
        <meta name="description" content="Description of DiscoverPage" />
      </Helmet>
      DiscoverPage
    </div>
  );
}

DiscoverPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  discoverPage: makeSelectDiscoverPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DiscoverPage);
