const Group = require("../models/group.model");
const Message = require("../models/message.model");
const catchAsync = require("../utils/catchAsync");

const sendMessage = catchAsync(async (req, res, next) => {
    const { groupId } = req.params;
    const { content } = req.body;

    const group = await Group.findById(groupId);

    if (!group) {
        return next(new AppError("Group not found!", 404));
    }

    if (!group.members.includes(req.userId)) {
        return next(new AppError("You are not a member of this group!", 403));
    }

    const newMessage = await Message.create({ content, sender: req.userId, group: groupId });

    res.status(201).json({
        status: "success",
        message: "Message sent successfully!",
        data: {
            message: newMessage
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

    if (!group.members.includes(req.userId)) {
        return next(new AppError("You are not a member of this group!", 403));
    }

    const messages = await Message.find({ group: groupId });

    res.status(200).json({
        status: "success",
        data: {
            messages
        }
    });
})

module.exports = { sendMessage, deleteMessage, getMessagesByGroup };