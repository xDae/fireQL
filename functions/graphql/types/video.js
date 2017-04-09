const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql');

const videoType = new GraphQLObjectType({
  name: 'Video',
  description: 'A video type',
  fields: {
    id: {
      type: GraphQLID,
      description: 'the ID of the video'
    },
    title: {
      type: GraphQLString,
      description: 'the title of the video'
    },
    duration: {
      type: GraphQLInt,
      description: 'the duration of video, in seconds'
    },
    watched: {
      type: GraphQLBoolean,
      description: 'if video has been watched'
    },
  }
});

module.exports = videoType;
