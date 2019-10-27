import Request from 'services/request';

const sendUpdateUserRequest = payloads =>
  Request.post({ url: 'user/update', data: payloads });
export default sendUpdateUserRequest;
