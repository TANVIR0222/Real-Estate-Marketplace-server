import bcryptjs from "bcryptjs";
import User from "../Model/user.model.js";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
// sing up
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

// sing in
export const singin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // chack password and email
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User Not Found!"));
    const validPass = bcryptjs.compareSync(password, validUser.password);
    if (!validPass) return next(errorHandler(401, "Password not credentials"));
    const token = jwt.sign({ _id: validUser._id }, process.env.JWT_SECRET);
    // hashpass jenow na dekhajay tai 
    // const {password: pass , ...rest} = validUser._doc;
    // using jtw DOC
    res
      .cookie(
        "access_token",
        token,
        {
          httpOnly: true,
          exp: Math.floor(Date.now() / 1000) + (60 * 60),

        },
        "secret",
        { expiresIn: "1h" }
      )
      .status(200)
      .json(validUser);
      // .json(rest); not work ing 
  } catch (eror) {
    next(eror);
  }
};
