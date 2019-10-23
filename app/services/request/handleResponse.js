/* eslint-disable no-console */
export const handleResponse = response => {
  let isResponseSuccess = '';
  if (response.status === 200) isResponseSuccess = true;
  else isResponseSuccess = false;
  // console.log(response.status);
  return isResponseSuccess;
};
