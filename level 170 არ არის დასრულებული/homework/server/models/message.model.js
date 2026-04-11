const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Message content is required!"]
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group"
    }
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;