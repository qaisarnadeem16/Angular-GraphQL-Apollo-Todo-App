

export const typeDefs = `#graphql
type user{
      id:ID!
     email: String!
     username: String!
     age: Int!
     nationality: String!
   
}
type CreateUser {
  id: ID!
  email: String!
  username: String!
  age: Int!
  nationality: String!
}

input UserInput  {
  email: String!
  username: String!
  age: Int!
  nationality: String!
}

 type Query{
    getUsers: [user!]!
    user(id: Int!): user!
 }

 
type Mutation {
  createUser(email: String!, username: String!, age: Int!, nationality: String!): CreateUser!

  updateUser(id: ID!, input: UserInput!): user!

  deleteUser(id: ID!): user!
}
`