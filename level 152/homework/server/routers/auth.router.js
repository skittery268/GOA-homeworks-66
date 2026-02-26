const express = require('express');
const { login, verifyEmail, register } = require('../controllers/auth.controller');

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/verify', verifyEmail);

module.exports = authRouter;