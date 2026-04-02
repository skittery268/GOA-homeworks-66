const express = require("express");
const { sendMessage } = require("../controllers/message.controller");
const protect = require("../middlewares/auth.middleware");

const messageRouter = express.Router();

messageRouter.post("/:groupId", protect, sendMessage);
messageRouter.delete("/:messageId", protect, deleteMessage);
messageRouter.get("/group/:groupId", protect, getMessagesByGroup);

module.exports = messageRouter;