const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Group title is required!"]
    },
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    public: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;