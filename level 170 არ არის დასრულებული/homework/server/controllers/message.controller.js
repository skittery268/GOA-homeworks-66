const Group = require("../models/group.model");
const Message = require("../models/message.model");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const sendMessage = catchAsync(async (req, res, next) => {
    const { groupId } = req.params;
    const { content } = req.body;

    const group = await Group.findById(groupId);

    if (!group) {
        return next(new AppError("Group not found!", 404));
    }

    const isMember = group.members.some((memberId) => memberId.toString() === req.userId.toString());

    if (!isMember) {
        return next(new AppError("You are not a member of this group!", 403));
    }

    const newMessage = await Message.create({ content, sender: req.userId, group: groupId });
    const messageWithSender = await Message.findById(newMessage._id).populate("sender", "name email");

    req.io.to(groupId.toString()).emit("newMessage", messageWithSender);

    res.status(201).json({
        status: "success",
        message: "Message sent successfully!",
        data: {
            message: messageWithSender
        }
    })
})

const deleteMessage = catchAsync(async (req, res, next) => {
    const { messageId } = req.params;

    const message = await Message.findById(messageId);

    if (!message) {
        return next(new AppError("Message not found!", 404));
    }

    if (message.sender.toString() !== req.userId.toString()) {
        return next(new AppError("You can only delete your own messages!", 403));
    }

    req.io.to(message.group.toString()).emit("messageDeleted", {
        messageId: message._id.toString(),
        groupId: message.group.toString()
    });

    await Message.findByIdAndDelete(messageId);

    res.status(200).json({
        status: "success",
        message: "Message deleted successfully!"
    })
})

const getMessagesByGroup = catchAsync(async (req, res, next) => {
    const { groupId } = req.params;

    const group = await Group.findById(groupId);

    if (!group) {
        return next(new AppError("Group not found!", 404));
    }

    const isMember = group.members.some((memberId) => memberId.toString() === req.userId.toString());

    if (!isMember) {
        return next(new AppError("You are not a member of this group!", 403));
    }

    const messages = await Message.find({ group: groupId }).populate("sender", "name email");

    res.status(200).json({
        status: "success",
        data: {
            messages
        }
    });
})

module.exports = { sendMessage, deleteMessage, getMessagesByGroup };