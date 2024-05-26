import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    account: String,
    password: String,

});

const User = mongoose.model('User', userSchema);
export default User;
