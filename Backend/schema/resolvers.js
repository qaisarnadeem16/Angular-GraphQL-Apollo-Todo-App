import { UserList } from "../FakeData.js"
import User from "../Model/User.js";

export const resolvers = {
    Query: {
        getUsers: async () => {
            try {
              const users = await User.find();
              return users;
            } catch (error) {
              throw new Error('Failed to fetch users');
            }
          },

        user: async (_parent, args) => {  // Use args here
            const findUser = UserList.find((val) => val.id === args.id)
            await UserModel.finbyID(args.id)

            if (!findUser) {
                throw new Error(`findUser with ID ${args.id} not found`);
            }
            return findUser;
        },

    },


    Mutation: {
        createUser: async (_, args) => {
            try {
                const newUser = await User.create(args);
                // console.log(newUser)
                return newUser;
            } catch (error) {
                throw new Error('Failed to create user ' , newUser);
            }
        },



        updateUser: async (_, { id, input }) => {
            try {
              const updatedUser = await User.findByIdAndUpdate(id, input, { new: true });
              return updatedUser;
            } catch (error) {
              throw new Error('Failed to update user');
            }
          },


          deleteUser: async (_, { id }) => {
            try {
              const deletedUser = await User.findByIdAndRemove(id);
              if (!deletedUser) {
                throw new Error('User not found');
              }
              return deletedUser;
            } catch (error) {
              throw new Error('Failed to delete user');
            }
          },
    },
}
