const express = require("express");
const protect = require("../middlewares/auth.middleware");
const getUserChats = require("../controllers/chat.controller");

const chatRouter = express.Router();

chatRouter.get("/", protect, getUserChats);

module.exports = chatRouter;