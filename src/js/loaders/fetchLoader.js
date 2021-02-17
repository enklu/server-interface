export default async (request, receiverFunc, options) => {
  const { endpoint, body, customOptions } = request;
  const responseObj = {};
  try {
    const response = await fetch(endpoint, { ...options, ...customOptions, body });
    const responseJSON = await response.json();
    if (response.status === 200) {
      responseObj.success = true;
      responseObj.body = responseJSON.body;
    } else {
      responseObj.success = false;
      if (responseJSON.error) {
        responseObj.error = new Error(responseJSON.error);
      }
    }
  } catch (error) {
    console.warn(error);
    responseObj.success = false;
    responseObj.error = error;
  }

  return receiverFunc(responseObj, request);
};
