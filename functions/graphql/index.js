const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });

const { graphql } = require('graphql');

const Schema = require('./schema');

module.exports = functions.https.onRequest((req, res) => cors(req, res, () => {
  if (req.method === 'POST') {
    return graphql(Schema, req.body.query, null, {}, req.body.variables)
    .then(result => {
      res.send(result);
    })
    .catch(err => res.send(new Error('hubo un error madafaker')))
  } else {
    return graphql(Schema, req.body.query, null, {}, req.body.variables)
    .then(result => res.send(result))
    .catch(err => res.send(new Error('hubo un error madafaker')));
  }
}));
