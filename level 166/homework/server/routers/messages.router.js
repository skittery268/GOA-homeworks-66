const express = require("express");
const { addMessage, getMessages, getAllUsers } = require("../controllers/messages.controller");
const protect = require("../middleware/auth.middleware");

const messagesRouter = express.Router();

messagesRouter.post("/", protect, addMessage);
messagesRouter.get("/users", protect, getAllUsers);
messagesRouter.get("/:receiverId", protect, getMessages);

module.exports = messagesRouter;