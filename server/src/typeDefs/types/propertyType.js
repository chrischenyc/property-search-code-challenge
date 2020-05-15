const { gql } = require('apollo-server-express');

const propertyType = gql`
  type Property {
    id: ID!
    price: Int!
    address: String!
  }
`;

module.exports = {
  propertyType,
};
