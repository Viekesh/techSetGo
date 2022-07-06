import express from "express";
import { deleteUser, getAllUser, login, signUp } from "../controller/userController.js";



const userRouter = express.Router();

userRouter.post("/signUp", signUp);

userRouter.post("/login", login);

userRouter.get("/", getAllUser);

userRouter.delete("/delete/:id", deleteUser);

export default userRouter;