const Chat = require("../models/chat.model");
const catchAsync = require("../utils/catchAsync");

const getUserChats = catchAsync(async (req, res, next) => {
    const chats = await Chat.find();

    const filteredChats = chats.filter(c => c.members.includes(req.userId));

    res.status(200).json({
        status: "success",
        message: "Chats returned successfully!",
        data: {
            chats: filteredChats
        }
    })
})

module.exports = getUserChats;