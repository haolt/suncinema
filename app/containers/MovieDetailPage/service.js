import Request from 'services/request';

const sendGetAMovieRequest = id => Request.get({ url: `movies/${id}` });
export default sendGetAMovieRequest;
