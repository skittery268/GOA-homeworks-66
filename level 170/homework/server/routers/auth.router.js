const express = require("express");
const { login, register, logout, getMe, updateMe, changePassword } = require("../controllers/auth.controller");
const protect = require("../middlewares/auth.middleware");

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/register", register);
authRouter.post("/logout", logout);
authRouter.get("/me", protect, getMe);
authRouter.patch("/me", protect, updateMe);
authRouter.patch("/password", protect, changePassword);

module.exports = authRouter;
