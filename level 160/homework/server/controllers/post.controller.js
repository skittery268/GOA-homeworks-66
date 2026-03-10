const Post = require("../models/post.model");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

// Create a new post
const createPost = catchAsync(async (req, res) => {
    const { title, content } = req.body;

    const post = await Post.create({ title, content, userId: req.userId });

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
    const posts = await Post.find();

    res.status(200).json({
        message: "Succesfully returned posts!",
        status: "success",
        count: posts.length,
        data: {
            posts
        }
    })
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

    if(post.userId !== req.userId) {
        return next(new AppError("You dont own this post!", 401));
    }

    res.status(200).json({
        message: "Post deleted succesfully!",
        status: "success"
    });
});

// Update post by ID
const updatePost = catchAsync(async (req, res, next) => {
    const { postId } = req.params;
    const { title, content } = req.body;

    const post = await Post.findById(postId);

    if(!post) {
        return next(new AppError("Post cant be found!", 404));
    }

    if(post.userId !== req.userId) {
        return next(new AppError("You dont own this post!", 401));
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

module.exports = { createPost, getPosts, getPost, deletePost, updatePost };