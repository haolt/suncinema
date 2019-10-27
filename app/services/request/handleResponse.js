/* eslint-disable no-console */
export const handleResponse = response => {
  let isResponseSuccess = false;
  console.log('Handle service: ', response);
  if (response.status === 200) isResponseSuccess = true;
  return isResponseSuccess;
};
