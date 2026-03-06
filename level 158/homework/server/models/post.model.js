const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Post Title is required!"]
    },
    content: {
        type: String,
        required: [true, "Post Content is required!"]
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: [true, "User ID is required!"]
    }
}, { timestamps: true });

const Post = mongoose.model("posts", postSchema);

module.exports = Post;