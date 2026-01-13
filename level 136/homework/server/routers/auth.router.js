const express = require('express');
const { register, login } = require('../controllers/auth.conrtoller');

const authRouter = express.Router();

authRouter.post("/signup", register);

authRouter.post("/signin", login);

module.exports = authRouter;