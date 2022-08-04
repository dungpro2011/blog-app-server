import mongoose from "mongoose";

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,

    },
    attachment: String,
}, { timestamps: true });

export const UserModel = mongoose.model('User', user);