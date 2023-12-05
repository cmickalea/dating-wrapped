import mongoose, {Schema} from "mongoose";

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, "Please enter your first name"],
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

// const UserModel = mongoose.model('User', UserSchema)

// export default UserModel;


const UserModel = mongoose.model('User', UserSchema);
export default UserModel;