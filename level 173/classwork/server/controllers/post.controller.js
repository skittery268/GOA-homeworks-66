const Post = require("../models/post.model");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

const fs = require('fs');
const path = require('path');

// Create a new post
const createPost = catchAsync(async (req, res) => {
    const { title, content } = req.body;

    const postData = { title, content, user: req.userId };

    if (req.file) {
        postData.postImage = req.file.filename;
    }

    const newPost = await Post.create(postData);

    const post = await Post.findById(newPost._id).populate('user')

    res.status(201).json({
        message: "Post created succesfully!",
        status: "success",
        data: {
            post
        }
    });
});

// Get posts
const getPosts = catchAsync(async (req, res) => {
    const posts = await Post.find().populate('user');

    res.status(200).json({
        message: "Succesfully returned posts!",
        status: "success",
        count: posts.length,
        data: {
            posts
        }
    })
});

// Get posts by user ID
const getUserPosts = catchAsync(async (req, res) => {
    const { userId } = req.params;

    const posts = await Post.find({ user: userId }).populate('user');

    res.status(200).json({
        message: "Succesfully returned user posts!",
        status: "success",
        count: posts.length,
        data: {
            posts
        }
    });
});

// Get post by ID
const getPost = catchAsync(async (req, res, next) => {
    const { postId } = req.params;

    const post = await Post.findById(postId);

    if(!post) {
        return next(new AppError("Post cant be found!", 404));
    }

    res.status(200).json({
        message: "Succesfully returned post!",
        status: "success",
        data: {
            post
        }
    })
});

// Delete post by ID
const deletePost = catchAsync(async (req, res, next) => {
    const { postId } = req.params;

    const post = await Post.findById(postId);

    if(!post) {
        return next(new AppError("Post cant be found!", 404));
    }

    if(!post.user.equals(req.userId)) {
        return next(new AppError("You dont own this post!", 400));
    }

    const filePath = path.join(__dirname, `/../images/posts/${post.postImage}`);

    // Asynchronous file removal
    fs.unlink(filePath, (err) => {
        if (err) {
            if (err.code === 'ENOENT') {
                console.error('❌ File does not exist.');
            } else {
                console.error('❌ Error deleting file:', err);
            }
            return;
        }
        console.log('✅ File deleted successfully.');
    });

    await Post.findByIdAndDelete(postId);

    res.status(200).json({
        message: "Post deleted succesfully!",
        status: "success"
    });
});

// Update post by ID
const updatePost = catchAsync(async (req, res, next) => {
    const { postId } = req.params;
    const { title, content } = req.body;

    const post = await Post.findById(postId).populate('user');

    if(!post) {
        return next(new AppError("Post cant be found!", 404));
    }

    if(!post.user.equals(req.userId)) {
        return next(new AppError("You dont own this post!", 400));
    }

    if(title) post.title = title;
    if(content) post.content = content;

    await post.save();

    res.status(200).json({
        message: "Post updated succesfully!",
        status: "success",
        data: {
            post
        }
    });
});

module.exports = { createPost, getPosts, getUserPosts, getPost, deletePost, updatePost };
