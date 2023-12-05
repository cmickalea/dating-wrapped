import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        firstName: {
            type: String,
            required: [true, "Please enter your first name"],
        },
        lastName: {
            type: String,
            required: [true, "Please enter your last name"],
        },
        email: {
            type: String,
            required: [true, "Please add an email address"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please add a password"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', UserSchema)
