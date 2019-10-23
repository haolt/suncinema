import axios from 'axios';
import { API_URL, ACCESS_TOKEN } from 'commons/constants';
import { getCookie } from '../cookie';

axios.defaults.baseURL = API_URL;

export default function requestHelper({ method, options }) {
  return axios({
    ...options,
    method,
    headers: {
      Authorization: `Bearer ${getCookie(ACCESS_TOKEN)}`,
    },
  })
  .then(response => response)
  .catch(err => err.response);
}
