import Request from 'services/request';

const sendChangePasswordRequest = payloads =>
  Request.post({ url: 'user/change_password', data: payloads });
export default sendChangePasswordRequest;
