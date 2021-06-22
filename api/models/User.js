const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        default: "",
    },
    firstname: {
        type: String,
        required: true,
    },
    middlename: {
        type: String,
        default: "",
    },
    lastname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        default: "",
    },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", UserSchema);