// Modules
import express from "express";

// Controllers
import { login, register } from "../controllers/auth.controller.js";

const authRouter = express.Router();

// Route to registre new users
authRouter.post("/register", register);
// Route to login user
authRouter.post("/login", login);

export default authRouter;