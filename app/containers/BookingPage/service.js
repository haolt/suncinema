import Request from 'services/request';

const sendGetBookableSeatRequest = id =>
  Request.get({ url: `bookable_seat/${id}` });
export default sendGetBookableSeatRequest;
