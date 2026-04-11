const express = require("express");
const { login, register, getMe } = require("../controllers/auth.controller");
const protect = require("../middlewares/auth.middleware");

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/register", register);
authRouter.get("/me", protect, getMe);

module.exports = authRouter;