const functions = require('firebase-functions');
const admin = require('firebase-admin');

module.exports = admin.initializeApp(functions.config().firebase);
