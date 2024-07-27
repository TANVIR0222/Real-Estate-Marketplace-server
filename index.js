import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();


mongoose.connect(process.env.MONGODB);
const port = process.env.PORT || 5000

app.listen(port, () =>{
    console.log(`server is running ${port}`);
})

// tanvirislam3912 4VzQttBOaY1eaTmv

// 