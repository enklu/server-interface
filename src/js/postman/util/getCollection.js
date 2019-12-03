const fetch = require('node-fetch');

module.exports = async ({ headers, target: { uid, name } } = {}) => {
  const result = await fetch(
    `https://api.getpostman.com/collections/${uid}`,
    { method: 'GET', headers }
  );
  const json = await result.json();
  return json;
};
