const fetch = require('node-fetch');

console.log('Creating file from Postman collection');
const defaultCollectionUid = '2558443-c1d8960b-2306-b8f7-e4fd-85112650f994';
const defaultUrl = 'https://api.getpostman.com/collections/';

const parseResult = (json) => {
  console.log(json);
}

const getCollection = async ({ url = defaultUrl, collectionUid = defaultCollectionUid } = {}) => {
  try {
    const result = await fetch(
      `${url}${collectionUid}`,
      {
        method: 'GET',
        headers: { 'X-Api-Key': 'PMAK-5de56332364d8f00307b4eeb-385830c1066f9d7b9c103d5b2311e13cab' }
      }
    );
    const json = await result.json();
    parseResult(json);
  } catch (error) {
    console.error(error);
  }

}

getCollection();


// https://api.getpostman.com/collections/{{collection_uid}}
// PMAK-5de56332364d8f00307b4eeb-385830c1066f9d7b9c103d5b2311e13cab
