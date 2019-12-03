const fetch = require('node-fetch');
const minimist = require('minimist');
const ejs = require('ejs');
const fs = require('fs');

const parseResponse = require('./util/parseResponse');

const ErrorMessages = {
  NO_CONFIG: 'This script requires a config file at "${path}.json". See config-template.json for the required format.',
  WRONG_PARAM: 'Please specify a target with the --target parameter. Valid targets are listed in config.js.',
  SPECIFIED_TARGET_MISSING: 'Specified target does not exist in the config file.'
};

const getConfig = ({ path }) => {
  // Get the config file.
  let config;
  try {
    console.log('Verifying config file...');
    config = require(path);
  } catch (error) {
    throw new Error(ErrorMessages.NO_CONFIG);
    return;
  }

  // Get params.
  let targetName = minimist(process.argv.slice(2)).target;
  if (!targetName) {
    throw new Error(ErrorMessages.WRONG_PARAM);
    return;
  }

  targetName = targetName.toLowerCase();
  if (!config.targets[targetName]) {
    throw new Error(ErrorMessages.SPECIFIED_TARGET_MISSING);
  }

  console.log('Config file loaded successfully.');
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

const parseResult = async ({ name: serverName, json }) => {
  console.log('Parsing result');
  const {
    collection: {
      info: { name, description },
      item
    }
  } = json;
  console.log(`Received: ${name}: ${description}`);
  console.log(`${item.length} items`);

  item.forEach(({ name, item }) => {
    console.log('', name);
    item.forEach((data) => {
      const [uriString, actionString, funcString] = parseResponse(data)
      console.log(uriString, actionString, funcString);
    })
    console.log('');
  });

  return;
  const actionsFile = await ejs.renderFile('./src/js/postman/templates/actions.ejs', {
    fileName: 'Trellis',
    item
  });
  console.log(actionsFile);

  const res = await fs.writeFile(`./src/js/actions/${serverName}Actions.js`, actionsFile);
  console.log(`file ${serverName}Actions.js written`);
  console.error(error);
}

const go = async () => {
  console.log('Creating file from Postman collection');
  const config = getConfig({ path: './config' });
  const collection = await getCollection(config);
}

// Export for testing.
module.exports = { getConfig, getCollection, ErrorMessages };

// Only run if we're not testing.
if (!process.env.JEST_WORKER_ID) {
  go();
}
