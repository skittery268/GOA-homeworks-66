const express = require('express');

// Controllers for handling requests
const { signup, login } = require('../controllers/auth.controller');

// Container for all routes combined
const authRouter = express.Router();

// Signup controller
authRouter.post('/signup', signup);
authRouter.post('/login', login);

module.exports = authRouter;