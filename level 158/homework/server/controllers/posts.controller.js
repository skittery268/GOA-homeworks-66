const Post = require("../models/post.model");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

const getAllPosts = catchAsync(async (req, res, next) => {
    const posts = await Post.find();

    res.status(200).json({
        status: "Success",
        data: {
            posts
        }
    })
})

const getPost = catchAsync(async (req, res, next) => {
    const { postId } = req.params;

    const post = await Post.findOne({ _id: postId });

    if (!post) {
        return next(new AppError("Post not found", 404));
    }

    res.status(200).json({
        status: "Success",
        data: {
            post
        }
    })
})

const createPost = catchAsync(async (req, res, next) => {
    const { title, content, userId } = req.body;

    const newPost = await Post.create({ title, content, userId });

    res.status(201).json({
        message: "New post created!",
        status: "Success",
        data: {
            newPost
        }
    })
})

const deletePost = catchAsync(async (req, res, next) => {
    const { postId } = req.params;

    await Post.deleteOne({ _id: postId });

    res.status(204).json({
        message: "Post deleted successfull!",
        status: "Success"
    })
})

const editPost = catchAsync(async (req, res, next) => {
    const { postId } = req.params;
    const { title, content } = req.body;

    const post = await Post.findOne({ _id: postId });

    if (!post) {
        return next(new AppError("Post not found", 404));
    }

    if (title) post.title = title;
    if (content) post.content = content;

    await post.save();

    res.status(200).json({
        message: "Post changed succcessfull",
        status: "Success",
        data: {
            post
        }
    })
})

const getUserPosts = catchAsync(async (req, res, next) => {
    const { userId } = req.params;

    const posts = await Post.find({ userId });

    res.status(200).json({
        status: "Success",
        data: {
            posts
        }
    })
})

module.exports = { getAllPosts, getPost, createPost, deletePost, editPost, getUserPosts };