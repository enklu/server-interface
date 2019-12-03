const fetch = require('node-fetch');
const minimist = require('minimist');
const ejs = require('ejs');
const fs = require('fs');

const parseResponse = require('./util/parseResponse');

const ErrorMessages = {
  NO_CONFIG: 'This script requires a config file at "/config.json". See /config-template.json for the required format.',
  WRONG_PARAM: 'Please specify a target with the --target parameter. Valid targets are listed in config.js.',
  SPECIFIED_TARGET_MISSING: 'Specified target does not exist in the config file.'
};

const getConfig = ({ path, targetName }) => {
  // Get the config file.
  let config;
  try {
    config = require(path);
  } catch (error) {
    throw new Error(ErrorMessages.NO_CONFIG);
    return;
  }

  if (!config.targets[targetName]) {
    throw new Error(ErrorMessages.SPECIFIED_TARGET_MISSING);
  }

  return {
    headers: config.headers,
    target: {
      ...config.targets[targetName],
      name: targetName
    }
  };
}

const getCollection = async ({ headers, target: { uid, name } } = {}) => {
  const result = await fetch(
    `https://api.getpostman.com/collections/${uid}`,
    { method: 'GET', headers }
  );
  const json = await result.json();
  return json;
}

const parseResult = ({ json }) => {
  const {
    collection: {
      info: { name, description },
      item
    }
  } = json;

  //  [category]: [{ uri, action, func }, {}, {}, ...]
  const parsedCollection = item.reduce((accum, { name: categoryName, item }) => {
    const items = item.map(data => parseResponse(data));
    return { ...accum, [categoryName]: items };
  }, {});

  return parsedCollection;
}

const createFile = async ({ parsedCollection }) => {
  return await ejs.renderFile(
    './src/js/postman/templates/actions.ejs',
    { parsedCollection }
  );
}

const go = async () => {
  // Get params.
  let targetName = minimist(process.argv.slice(2)).target;
  if (!targetName) {
    throw new Error(ErrorMessages.WRONG_PARAM);
    return;
  }

  targetName = targetName.toLowerCase();
  const config = getConfig({ path: './config', targetName });
  const json = await getCollection(config);
  const parsedCollection = parseResult({ json });
  const file = await createFile({ parsedCollection });
  const res = await fs.writeFile(`./src/js/actions/${targetName}Actions.js`, file);
  console.log(`Successfully generated ${targetName}Actions.js`);
}

// Export for testing.
module.exports = { getConfig, getCollection, ErrorMessages };

// Only run if we're not testing.
if (!process.env.JEST_WORKER_ID) {
  go();
}
