import Request from 'services/request';

const sendGetMovieRequest = () => Request.get({ url: 'movies' });
export default sendGetMovieRequest;
