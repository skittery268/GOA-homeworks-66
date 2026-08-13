const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Group title is required!"],
        trim: true,
        minLength: [2, "Group title must be at least 2 characters long!"],
        maxLength: [50, "Group title can not be longer than 50 characters!"],
        index: true
    },
    description: {
        type: String,
        trim: true,
        maxLength: [200, "Group description can not be longer than 200 characters!"],
        default: ""
    },
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    public: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

groupSchema.methods.hasMember = function (userId) {
    return this.members.some((member) => (member?._id || member).toString() === userId.toString());
}

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
