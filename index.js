import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import  userRouter  from "./routes/user.route.js";
import  authRouter  from "./routes/auth.router.js";
dotenv.config();
const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("mongoBD"))
  .catch((error) => console.log(error));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running ${port}`);
});

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)


