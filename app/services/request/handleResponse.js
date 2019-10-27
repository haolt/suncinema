/* eslint-disable no-console */
export const handleResponse = response => {
  let isResponseSuccess = false;
  if (response.status === 200) isResponseSuccess = true;
  return isResponseSuccess;
};
