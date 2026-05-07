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
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, "User id is required!"]
    },
    postImage: {
        type: String
    }
}, {
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;


// reference