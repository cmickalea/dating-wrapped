import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    // confirm fields are filled
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("fill me out babes");
    }

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        res.status(400);
        throw new Error("user already exists");
    }

    // hash password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    // confirm user created
    if (user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        });
    } else {
        res.status(400);
        throw new Error("invalid user data");
    }
});

const login = asyncHandler(async (req, res) => {
    // get user credentials
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error("invalid credentials");
    }
});

const getUser = asyncHandler(async (req, res) => {
    const {_id, username, email} = await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        username,
        email
    })
});

// generate token

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}
export { registerUser, getUser, login };
