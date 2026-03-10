const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Post title is required!"]
    },
    content: {
        type: String,
        required: [true, "Post content is required!"]
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, "User id is required!"]
    }
}, {
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;


// reference