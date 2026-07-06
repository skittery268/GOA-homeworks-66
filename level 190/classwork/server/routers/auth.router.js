const express = require('express');
const { signup, signin, signout, verifyEmail, getMe } = require('../controllers/auth.controller');
const { protect } = require('../middlewares/protect.middleware');
const { loginLimit, registerLimit, logoutLimit, verifyLimit } = require("../config/rateLimiter.config");

const authRouter = express.Router();

authRouter.post('/signup', registerLimit, signup);
authRouter.post('/signin', loginLimit, signin);
authRouter.post('/signout', logoutLimit, signout);
authRouter.get("/me", protect, getMe);
authRouter.get('/verify-email', verifyLimit, verifyEmail);

module.exports = authRouter;