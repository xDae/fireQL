const firebase = require('../firebase');

const DB = firebase.database();

const createVideo = ({ id, title, duration, released }) => {
  return new Promise((resolve, reject) => {
    const ref = DB.ref('videos');
    const video = { id, title, duration, released };

    ref.child(id).set({
      title,
      duration,
      released
    }, error => {
      if (error) {
        reject(new Error('Data could not be saved.'))
      } else {
        resolve(video);
      }
    });
  });
}

module.exports = createVideo;
