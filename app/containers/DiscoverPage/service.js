import Request from 'services/request';

const sendSortMovieRequest = ({ sort, order, page }) =>
  Request.get({
    url: `movies?sort=${sort}&order=${order}&page=${page}`,
  });
export default sendSortMovieRequest;
