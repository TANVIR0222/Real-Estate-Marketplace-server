import bcryptjs from "bcryptjs";
import User from "../Model/user.model.js";
import { errorHandler } from "../utils/error.js";

export const singup = async (req, res, next) => {
  const { username, email, password } = req.body;

  // hash pass
  const hashPass = bcryptjs.hashSync(password, 12);
  //   user fild using conditions extra p
  const newUser = new User({ username, email, password: hashPass });
  // user data send database
  try {
    const savedUser = await newUser.save();
    res.status(201).json("success singin");
  } catch (error) {
    next(error);
  }
};
