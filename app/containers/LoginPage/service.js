import Request from 'services/request';

const sendLoginRequest = payloads =>
  Request.post({ url: 'login', data: payloads });

export default sendLoginRequest;
