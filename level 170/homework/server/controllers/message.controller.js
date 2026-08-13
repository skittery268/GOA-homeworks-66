const Group = require("../models/group.model");
const Message = require("../models/message.model");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const { stopTyping } = require("../sockets/socket");

const findGroupForMember = async (groupId, userId, next) => {
    const group = await Group.findById(groupId);

    if (!group) {
        next(new AppError("Group not found!", 404));
        return null;
    }

    if (!group.hasMember(userId)) {
        next(new AppError("You are not a member of this group!", 403));
        return null;
    }

    return group;
}

const sendMessage = catchAsync(async (req, res, next) => {
    const { groupId } = req.params;
    const { content } = req.body;

    if (!content || !content.trim()) {
        return next(new AppError("Message content is required!", 400));
    }

    const group = await findGroupForMember(groupId, req.userId, next);

    if (!group) return;

    const newMessage = await Message.create({ content: content.trim(), sender: req.userId, group: groupId });
    const messageWithSender = await Message.findById(newMessage._id).populate("sender", "name email");

    // Sending a message means you stopped typing.
    stopTyping(groupId.toString(), req.userId.toString());

    req.io.to(groupId.toString()).emit("newMessage", messageWithSender);

    res.status(201).json({
        status: "success",
        message: "Message sent successfully!",
        data: {
            message: messageWithSender
        }
    })
})

const editMessage = catchAsync(async (req, res, next) => {
    const { messageId } = req.params;
    const { content } = req.body;

    if (!content || !content.trim()) {
        return next(new AppError("Message content is required!", 400));
    }

    const message = await Message.findById(messageId);

    if (!message) {
        return next(new AppError("Message not found!", 404));
    }

    if (message.sender.toString() !== req.userId.toString()) {
        return next(new AppError("You can only edit your own messages!", 403));
    }

    message.content = content.trim();
    message.edited = true;
    await message.save();

    const updatedMessage = await Message.findById(messageId).populate("sender", "name email");

    req.io.to(message.group.toString()).emit("messageEdited", updatedMessage);

    res.status(200).json({
        status: "success",
        message: "Message edited successfully!",
        data: {
            message: updatedMessage
        }
    })
})

const deleteMessage = catchAsync(async (req, res, next) => {
    const { messageId } = req.params;

    const message = await Message.findById(messageId);

    if (!message) {
        return next(new AppError("Message not found!", 404));
    }

    const group = await Group.findById(message.group);
    const isAdmin = group?.admin.toString() === req.userId.toString();

    if (message.sender.toString() !== req.userId.toString() && !isAdmin) {
        return next(new AppError("You can only delete your own messages!", 403));
    }

    await Message.findByIdAndDelete(messageId);

    // Only announce the deletion once it actually happened.
    req.io.to(message.group.toString()).emit("messageDeleted", {
        messageId: message._id.toString(),
        groupId: message.group.toString()
    });

    res.status(200).json({
        status: "success",
        message: "Message deleted successfully!"
    })
})

const getMessagesByGroup = catchAsync(async (req, res, next) => {
    const { groupId } = req.params;
    const { search, limit } = req.query;

    const group = await findGroupForMember(groupId, req.userId, next);

    if (!group) return;

    const filter = { group: groupId };

    if (search && search.trim()) {
        filter.content = { $regex: search.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), $options: "i" };
    }

    const messages = await Message.find(filter)
        .sort("createdAt")
        .limit(Math.min(Number(limit) || 200, 500))
        .populate("sender", "name email");

    res.status(200).json({
        status: "success",
        results: messages.length,
        data: {
            messages
        }
    });
})

module.exports = { sendMessage, editMessage, deleteMessage, getMessagesByGroup };
