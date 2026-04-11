const express = require("express");
const { sendMessage, deleteMessage, getMessages } = require("../controllers/message.controller");
const protect = require("../middlewares/auth.middleware");

const messageRouter = express.Router();

messageRouter.post("/:receiverId", protect, sendMessage);
messageRouter.delete("/:messageId", protect, deleteMessage);
messageRouter.get("/:chatId", getMessages);

module.exports = messageRouter;