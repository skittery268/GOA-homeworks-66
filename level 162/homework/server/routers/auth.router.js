const express = require('express');

// Controllers for handling requests
const { signup, login, verifyEmail, updateAccessToken, getMe } = require('../controllers/auth.controller');
const protect = require('../middlewares/auth.middleware');

// Container for all routes combined
const authRouter = express.Router();

// Signup controller
authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.get("/verify", verifyEmail);
authRouter.post("/updatetoken", updateAccessToken);
authRouter.get("/me", protect, getMe);

module.exports = authRouter;