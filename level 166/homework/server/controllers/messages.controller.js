const Message = require("../models/message.model");
const User = require("../models/user.model");
const catchAsync = require("../utils/catchAsync");

const getAllUsers = catchAsync(async (req, res, next) => {
    const users = await User.find({ _id: { $ne: req.userId } }).sort({ createdAt: -1 });

    const filteredUsers = users.map(user => {
        return {
            _id: user._id,
            fullname: user.fullname,
            email: user.email
        }
    });

    res.status(200).json({
        status: "success",
        data: {
            users: filteredUsers
        }
    });
})

const addMessage = catchAsync(async (req, res, next) => {
    const { content, receiverId } = req.body;

    const newMessage = await Message.create({ content, receiverId, senderId: req.userId });

    res.status(201).json({
        status: "success",
        message: "Message sent successfully!",
        data: {
            newMessage
        }
    })
})

const getMessages = catchAsync(async (req, res, next) => {
    const { receiverId } = req.params;

    const messages = await Message.find({ $or: [ { senderId: req.userId, receiverId }, { senderId: receiverId, receiverId: req.userId } ] }).sort({ createdAt: 1 });

    res.status(200).json({
        status: "success",
        data: {
            messages
        }
    })
})

module.exports = { addMessage, getMessages, getAllUsers };