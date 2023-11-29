import User from "../models/auth.js";
import { customError } from "../config/error.js";
import bcrypt from "bcrypt";
import generateToken from "../config/token.js";

export const registerUser = async (req, res) => {
 const { email, firstName, lastName, password, profileImg } = req.body;

  try {
    //check if useer already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(customError(404, "User already exist"));
    }
    //encrypt password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    console.log(passwordHash);
    //create a new user
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: passwordHash,
      profileImg:
        profileImg ||
        "https://res.cloudinary.com/ceenobi/image/upload/v1687743800/icon-256x256_d7vo98.png",
    });
    console.log(newUser);

    const user = {
      _id: newUser._id,
      email: newUser.email,
      profileImg: newUser.profileImg,
    };
    const access_token = generateToken(user._id);
    res
      .status(201)
      .json({ access_token, user, msg: "User registration successful" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) return next(customError(400, "User does not exist"));
    const isPasswordMatch = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordMatch) return next(customError(400, "Invalid Password"));

    const user = {
      _id: existingUser._id,
      email: existingUser.email,
      profileImg: existingUser.profileImg,
      isAdmin: existingUser.isAdmin,
    };
    const access_token = generateToken(existingUser._id);
    res.status(200).json({ access_token, user, msg: "Login successful" });
  } catch (error) {
    res.status(500).json(error);
  }
};


