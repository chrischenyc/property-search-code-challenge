const { query } = require('./query');
const { propertyType } = require('./types');

const typeDefs = [query, propertyType];

module.exports = {
  typeDefs,
};
