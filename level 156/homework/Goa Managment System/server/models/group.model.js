const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        enum: ["Web Development", "Data Science", "Cyber Security", "Game Development"],
        default: "Web Development",
    },
    mentor: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Mentor",
        required: true,
    }
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;