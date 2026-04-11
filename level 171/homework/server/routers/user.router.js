const express = require("express");
const { getAllUsers, getUserById } = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.get("/:userId", getUserById);
userRouter.get("/", getAllUsers);

module.exports = userRouter;