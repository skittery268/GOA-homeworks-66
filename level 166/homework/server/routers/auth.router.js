const express = require('express');

// Controllers for handling requests
const { signup, login, getMe, logout } = require('../controllers/auth.controller');
const protect = require('../middleware/auth.middleware');

// Container for all routes combined
const authRouter = express.Router();

// Signup controller
authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.get('/me', protect, getMe);
authRouter.get('/logout', protect, logout);

module.exports = authRouter;
