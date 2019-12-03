const constructItem = require('./constructItem');

module.exports = ({ json }) => {
  const {
    collection: {
      info: { name, description },
      item
    }
  } = json;

  //  [category]: [{ uri, action, func }, {}, {}, ...]
  const parsedCollection = item.reduce((accum, { name: categoryName, item }) => {
    const items = item.map(data => constructItem(data));
    return { ...accum, [categoryName]: items };
  }, {});

  return parsedCollection;
}
