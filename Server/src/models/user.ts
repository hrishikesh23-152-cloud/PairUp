import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
       
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    age: {
        type: Number,
        min: 0, 
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
    },
}, { timestamps: true });

const UserModel = mongoose.model('User', userSchema);
export default UserModel;