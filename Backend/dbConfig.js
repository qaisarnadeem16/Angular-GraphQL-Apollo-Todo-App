import mongoose from  "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect('mongodb+srv://qaisar:qaisar@cluster0.3lbj0ju.mongodb.net/graphql?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongod connected with server: ${data.connection.host}`);
    });
};

