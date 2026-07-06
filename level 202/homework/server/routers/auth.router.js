// Modules
const express = require("express");
const passport = require("passport");

// Controllers
const { register, login, getMe, logout, googleCallback } = require("../controllers/auth.controller");

// Middlewares
const protect = require("../middlewares/auth.middleware");

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/me", protect, getMe);
authRouter.post("/logout", protect, logout);

authRouter.get("/google", passport.authenticate("google", { scope: ["profile", "email"], session: false }));
authRouter.get("/google/callback", passport.authenticate("google", { session: false, failureRedirect: process.env.CLIENT_URL }), googleCallback);

module.exports = authRouter;