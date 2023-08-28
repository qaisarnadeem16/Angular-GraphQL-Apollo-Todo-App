import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: String,
  username: String,
  age: Number,
  nationality: String,
});

const User = mongoose.model('Users', userSchema);

export default User;
