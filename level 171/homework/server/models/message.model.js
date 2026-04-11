const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Message content is required!"]
    },
    senderId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: [true, "Sender ID is required!"]
    },
    chatId: {
        type: mongoose.Types.ObjectId,
        ref: "Chat",
        required: [true, "Chat ID is required!"]
    }
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;