const fetch = require('node-fetch');
const minimist = require('minimist');
const ejs = require('ejs');
const fs = require('fs');

const getConfig = ({ configPath }) => {
  // Get the config file.
  let config;
  try {
    console.log('Verifying config file...');
    config = require(configPath);
  } catch (error) {
    console.error(`This script requires a config file at "${configPath}.json". See config-template.json for the required format.`);
    return;
  }

  // Get params.
  const targetName = minimist(process.argv.slice(2)).target.toLowerCase();
  if (!targetName) {
    console.error('Please specify a target with the --target parameter. Valid targets are listed in config.js.')
    return;
  }
  if (!config.targets[targetName]) {
    console.error(`No target named "${targetName}" in the config file.`);
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
  try {
    const result = await fetch(
      `https://api.getpostman.com/collections/${uid}`,
      { method: 'GET', headers }
    );
    const json = await result.json();
    parseResult({ name, json });
  } catch (error) {
    console.error(error);
  }
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

  const actionsFile = await ejs.renderFile('./src/js/postman/templates/actions.ejs', { fileName: 'Trellis' });
  console.log(actionsFile);

  try {
    const res = await fs.writeFile(`./src/js/actions/${serverName}Actions.js`, actionsFile);
    console.log(`file ${serverName}Actions.js written`);
  } catch (error) {
    console.error(error);
  }

  // item.forEach(({ name, item }) => {
  //   console.log('', name);
  //   item.forEach(({ name, request: { url, method } }) => {
  //     console.log(' ', method, name);
  //     const path = url.path.join('/').replace('{{', ':').replace('}}', ''); // v1/editor/space/{{spaceId}}
  //     console.log(`  ${path} (${url.path})`);
  //   })
  //   console.log('');
  //   // console.log(name, request, response);
  // });
}

const go = () => {
  console.log('Creating file from Postman collection');
  const config = getConfig({ configPath: './config' });
  getCollection(config);
}

go();
