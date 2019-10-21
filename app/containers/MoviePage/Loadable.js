/**
 *
 * Asynchronously loads the component for MoviePage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
