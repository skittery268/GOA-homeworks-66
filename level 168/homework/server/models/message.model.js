const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Message content is required!"]
    }
})

const Message = mongoose.model("messages", messageSchema);

module.exports = Message;