const { GraphQLSchema } = require( 'graphql');

const queryType = require('./types/query');
const mutationType = require('./types/mutation');

const Schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
});

module.exports = Schema;
