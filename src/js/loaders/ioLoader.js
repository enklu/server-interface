export default (request, receiverFunc, options) => new Promise((resolve, reject) => {
  const { endpoint, body, replacements } = request;
  const { method } = options;
  io.socket.request(
    {
      method,
      url: endpoint,
      data: body,
      headers: {
        Authorization: `Bearer ${io.sails.token}`
      }
    },
    (response) => {
      const action = receiverFunc(
        response,
        {
          endpoint,
          body,
          replacements
        }
      );

      return resolve(action);
    }
  );
});
