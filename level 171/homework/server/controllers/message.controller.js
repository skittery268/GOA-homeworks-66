const Chat = require("../models/chat.model");
const Message = require("../models/message.model");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const createOrGetChat = async (user1, user2) => {
    let chat = await Chat.findOne({ members: { $all: [user1, user2] } });

    if (!chat) {
        chat = await Chat.create({ members: [user1, user2] });
    }

    return chat;
}

const sendMessage = catchAsync(async (req, res, next) => {
    const { content } = req.body;
    const { receiverId } = req.params;

    const chat = await createOrGetChat(req.userId, receiverId);

    const newMessage = await Message.create({ content, senderId: req.userId, chatId: chat._id });
    const messageForClient = await Message.findById(newMessage._id).populate("senderId");

    req.io.to(chat._id.toString()).emit("newMessage", messageForClient);

    res.status(200).json({
        status: "success",
        message: "Message send successfylly!",
        data: {
            chatId: chat._id.toString()
        }
    })
})

const deleteMessage = catchAsync(async (req, res, next) => {
    const { messageId } = req.params;

    const message = await Message.findById(messageId);

    if (!message) {
        return next(new AppError("Message cant be find!", 404));
    }

    if (message.senderId.toString() != req.userId.toString()) {
        return next(new AppError("You cant delete this message!", 401));
    }

    const chat = await Chat.findById(message.chatId);

    await Message.findByIdAndDelete(messageId);

    req.io.to(chat._id.toString()).emit("deleteMessage", messageId);

    res.status(200).json({
        message: "Message deleted successfully!",
        status: "success"
    })
})

const getMessages = catchAsync(async (req, res, next) => {
    const { chatId } = req.params;

    const messages = await Message.find({ chatId }).populate("senderId");

    res.status(200).json({
        status: "success",
        message: "Messages returned successfully!",
        data: {
            messages
        }
    })
})

module.exports = { sendMessage, deleteMessage, getMessages };