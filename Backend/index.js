import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// import { UserList } from './FakeData.js';
import {typeDefs} from './schema/typeDefs.js'
import {resolvers} from './schema/resolvers.js'
import { connectDatabase } from './dbConfig.js';
connectDatabase()
// const typeDefs = `#graphql
// type user{
//      name: ID!
//      username: String!
//      age: Int!
//      nationality: String!
   
// }
//  type Query{
//    users:[user]!
//  }
// `

// const resolvers={
//     Query :{
//          users(){
//             return UserList
//          }
//     }
// }


const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);