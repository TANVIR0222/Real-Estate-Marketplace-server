import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import  userRouter  from "./routes/user.route.js";
import  authRouter  from "./routes/auth.router.js";


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB)
  .then(() => console.log("mongoBD"))
  .catch((error) => console.log(error));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running ${port}`);
});

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)

// error handleing 
app.use((err, req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server Errot'
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})
