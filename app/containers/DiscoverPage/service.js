import Request from 'services/request';

const sendSearchMovieRequest = keywords =>
  Request.get({
    url: `search?search=${keywords}`,
  });
export default sendSearchMovieRequest;
