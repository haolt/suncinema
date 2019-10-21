/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export default function NotFound() {
  // *** test
  // mapState(selectRootStore).moviePage

  return (
    <h1>
      <FormattedMessage {...messages.header} />
    </h1>
  );
}
