const express = require('express');
const { register } = require('../controllers/auth.conrtoller');

const authRouter = express.Router();

authRouter.post("/signup", register);

module.exports = authRouter;