import express from "express";
import { createUser, loginUser } from "../controllers/AuthUser.js";



const AuthRouter = express.Router();

AuthRouter.post("/register", createUser);

AuthRouter.post("/login", loginUser);

export default AuthRouter;