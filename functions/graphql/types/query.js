const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLList
} = require('graphql');

const videoType = require('./video');

const getVideo= require('../database/get-video');
const getVideos = require('../database/get-videos');

const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type',
  fields: {
    videos: {
      type: new GraphQLList(videoType),
      args: {
        watched: {
          type: GraphQLBoolean,
          description: 'if the video has been watched'
        }
      },
      resolve: (_, args) => getVideos(args)
    },
    video: {
      type: videoType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: 'the ID of the video'
        }
      },
      resolve: (_, args) => getVideo(args.id)
    }
  }
});

module.exports = QueryType;
