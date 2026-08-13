const express = require("express");
const { sendMessage, editMessage, deleteMessage, getMessagesByGroup } = require("../controllers/message.controller");
const protect = require("../middlewares/auth.middleware");

const messageRouter = express.Router();

messageRouter.use(protect);

messageRouter.post("/:groupId", sendMessage);
messageRouter.patch("/:messageId", editMessage);
messageRouter.delete("/:messageId", deleteMessage);
messageRouter.get("/group/:groupId", getMessagesByGroup);

module.exports = messageRouter;
