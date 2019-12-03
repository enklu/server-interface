const fetch = require('node-fetch');
const minimist = require('minimist');
const ejs = require('ejs');
const fs = require('fs');

const getConfig = require('./util/getConfig');
const getCollection = require('./util/getCollection');
const parseCollection = require('./util/parseCollection');
const ErrorMessages = require('./constants/ErrorMessages');

const go = async () => {
  // Get params.
  let targetName = minimist(process.argv.slice(2)).target;
  if (!targetName) {
    throw new Error(ErrorMessages.WRONG_PARAM);
    return;
  }

  targetName = targetName.toLowerCase();
  const config = getConfig({ path: '../config', targetName });
  const json = await getCollection(config);
  const parsedCollection = parseCollection({ json });
  const file = await ejs.renderFile('./src/js/postman/templates/actions.ejs', { parsedCollection });
  const res = await fs.writeFile(`./src/js/actions/${targetName}Actions.js`, file);
  console.log(`Successfully generated ${targetName}Actions.js`);
}

go();
