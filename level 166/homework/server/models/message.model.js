const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Message content is required!"]
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Message sender is required!"]
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Message receiver is required!"]
    }
})

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;