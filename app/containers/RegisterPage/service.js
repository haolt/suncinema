import Request from 'services/request';

const sendRegisterRequest = payloads =>
  Request.post({ url: 'register', data: payloads });

export default sendRegisterRequest;
