import express from "express";
import { googleSingin, singin, singup } from "../Controllers/auth.controller.js";

const router = express.Router()

router.post('/singup',singup)
router.post('/singin',singin)
router.post('/google',googleSingin)

export default router;