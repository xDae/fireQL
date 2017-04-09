const firebase = require('../firebase');
const toArray = require('./utils');

const DB = firebase.database();

const getVideos = args => new Promise(resolve => {
  const ref = DB.ref('videos');

  ref.once('value', data => {
    const videos = toArray(data);

    if (args.watched !== undefined) {
      resolve(videos.filter(video => video.watched === args.watched));
    } else {
      resolve(videos);
    }
  });
});

module.exports = getVideos;
