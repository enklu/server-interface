export default async (request, receiverFunc, options) => {
  const { endpoint } = request;
  const responseObj = {};
  try {
    const response = await fetch(endpoint, options);
    if (response.status === 200) {
      const responseJSON = await response.json();
      responseObj.success = true;
      responseObj.body = responseJSON.body;
    } else {
      responseObj.success = false;
    }
  } catch (error) {
    console.warn(error);
    responseObj.success = false;
    responseObj.error = error;
  }

  return receiverFunc(responseObj, request);
};
