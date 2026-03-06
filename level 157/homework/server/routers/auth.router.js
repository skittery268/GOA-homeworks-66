const express = require("express");
const { signUp, signIn, verification } = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.post("/signup", signUp);

authRouter.post("/signin", signIn);

authRouter.post("/verify", verification);

module.exports = authRouter;