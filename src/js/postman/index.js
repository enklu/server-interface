const fetch = require('node-fetch');
const minimist = require('minimist');
const ejs = require('ejs');
const fs = require('fs');

const getConfig = require('./util/getConfig');
const getCollection = require('./util/getCollection');
const parseResponse = require('./util/parseResponse');
const ErrorMessages = require('./constants/ErrorMessages');

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
  const config = getConfig({ path: '../config', targetName });
  const json = await getCollection(config);
  const parsedCollection = parseResult({ json });
  const file = await createFile({ parsedCollection });
  const res = await fs.writeFile(`./src/js/actions/${targetName}Actions.js`, file);
  console.log(`Successfully generated ${targetName}Actions.js`);
}

// Only run if we're not testing.
go();
