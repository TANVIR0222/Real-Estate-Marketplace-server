import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("mongoBD connect "))
  .catch((error) => console.log(error));
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
