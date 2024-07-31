import express from "express";
import { deleteUser, test, updateUser } from "../Controllers/user.controller.js";
// import  verifyToken  from "../utils/verifyUser.js";
import { verifyToken } from "../utils/verifyUser.js";

const router =express.Router();

router.get('/test',test)
router.post('/update/:id', verifyToken , updateUser)
router.delete('/deleted/:id', verifyToken , deleteUser)


export default router;