const express = require('express');
const { getAllUsers, addUser, deleteUser } = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.get("/", getAllUsers);

userRouter.post("/", addUser);

userRouter.delete("/:id", deleteUser);

module.exports = userRouter;