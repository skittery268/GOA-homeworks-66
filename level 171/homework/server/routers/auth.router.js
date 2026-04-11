const express = require("express");
const { register, login, getMe, logout } = require("../controllers/auth.controller");
const protect = require("../middlewares/auth.middleware");

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/me", protect, getMe);
authRouter.delete("/logout", logout);

module.exports = authRouter;