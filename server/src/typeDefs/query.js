const { gql } = require('apollo-server-express');

const query = gql`
  type Query {
    propertiesBySuburb(suburb: String!): [Property]!
  }
`;

module.exports = {
  query,
};
