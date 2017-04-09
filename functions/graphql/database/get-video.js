const firebase = require('../firebase');
const DB = firebase.database();

const getVideoById = id => new Promise((resolve, reject) => {
  var ref = DB.ref(`videos`);

  ref.child(id).once('value', data => data.exists()
    ? resolve(Object.assign({}, data.val(), { id: data.key }))
    : reject(new Error(`Video with ID '${id}' doesnt found`))
  );
});

module.exports = getVideoById;
