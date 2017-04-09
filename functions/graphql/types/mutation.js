const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLNonNull
} = require('graphql');

const createVideo = require('../database/create-video');

const videoType = require('./video');

const MutationType = new GraphQLObjectType({
  name: 'mutation',
  description: 'The root mutation type',
  fields: {
    createVideo: {
      type: videoType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'the ID of the video'
        },
        title: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'the title of the video'
        },
        duration: {
          type: new GraphQLNonNull(GraphQLInt),
          description: 'the duration of the video'
        },
        released: {
          type: new GraphQLNonNull(GraphQLBoolean),
          description: 'the ID of the video'
        }
      },
      resolve: (_, args) => createVideo(args)
    }
  }
});

module.exports = MutationType;
