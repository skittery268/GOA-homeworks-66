const express = require('express');
const userController = require('../controllers/user.controller.js');

const usersRouter = express.Router();
usersRouter.use(express.json());

usersRouter.get("/", userController.getAllUsers)

usersRouter.get("/:id", userController.getUserById);

usersRouter.post("/register", userController.registerUser);

usersRouter.post("/login", userController.loginUser);

usersRouter.patch("/:id", userController.updateUser);

usersRouter.delete("/:id", userController.deleteUser);

module.exports = usersRouter;