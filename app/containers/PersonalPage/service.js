import Request from 'services/request';

const sendGetUserInfoRequest = () => Request.get({ url: 'user' });
export default sendGetUserInfoRequest;
