import { gql } from 'apollo-server-express';

const typeDefs =  gql `

  type Blog {
    _id: ID!
    userId: User!
    title: String!
    content: String!
    tags: [String]!
  }

  extend type Query {
    blogById(_id: ID!): Blog!
    blogByUser(userId:String!,limit:Int,skip:Int): [Blog]!
  }

  extend type Mutation {
    createBlog(title: String!,content:String!,tags:String!): MutationResponse!
    editBlog(_id:ID!,title: String!,content: String!,tags:String!): MutationResponse!
    deleteBlog(_id:ID!): MutationResponse!
  }

`;

export default typeDefs;