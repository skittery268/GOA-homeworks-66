const express = require('express');

// Controllers for handling requests
const { signup, login, getMe, logout, changeUserData } = require('../controllers/auth.controller');
const protect = require('../middleware/auth.middleware');
const uploadProfileImage = require('../utils/profileImage');

// Container for all routes combined
const authRouter = express.Router();

// Signup controller
authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.get('/me', protect, getMe);
authRouter.get('/logout', protect, logout);
authRouter.post("/changedata", protect, uploadProfileImage.single("profileImage"), changeUserData)

module.exports = authRouter;
