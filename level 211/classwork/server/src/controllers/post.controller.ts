// Types
import type { NextFunction, Request, Response } from "express";

// Utils
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";

// Models
import Post from "../models/post.model.js";

// Controller to get all posts
const getAllPosts = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const page = Number(req.query.page || 1);
    const limit = Number(req.query.limit || 10);

    const posts = await Post.find()
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean();

    const postCount = await Post.countDocuments();

    res.status(200).json({
        status: "success",
        message: "Posts returned successfully!",
        postCount,
        data: {
            posts
        }
    });
});

// Controller to get post by id
const getPostById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const post = await Post.findById(id);

    if (!post) {
        return next(new AppError("Post not found!", 404));
    };

    res.status(200).json({
        status: "success",
        message: "Post returned successfully!",
        data: {
            post
        }
    });
});

// Controller to create new post
const createPost = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { title, description } = req.body;

    if (!req.user) {
        return next(new AppError("You are not logged in!", 401));
    };

    const post = await Post.create({ title, description, authorId: req.user._id });

    res.status(201).json({
        status: "success",
        message: "Post created successfully!",
        data: {
            post
        }
    });
});

// Controller to delete post
const deletePost = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if (!req.user) {
        return next(new AppError("You are not logged in!", 401));
    };

    const post = await Post.findById(id);

    if (!post) {
        return next(new AppError("Post not found!", 404));
    };

    if (post.authorId.toString() !== req.user._id.toString()) {
        return next(new AppError("You cant delete this post!", 401));
    };

    await Post.findByIdAndDelete(id);

    res.status(200).json({
        status: "success",
        message: "Post deleted successfully!"
    });
});

// Controller to update post information
const updatePost = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { title, description } = req.body;

    if (!req.user) {
        return next(new AppError("You are not logged in!", 401));
    };

    const post = await Post.findById(id);

    if (!post) {
        return next(new AppError("Post not found!", 404));
    };

    if (post.authorId.toString() !== req.user._id.toString()) {
        return next(new AppError("You cant delete this post!", 401));
    };

    if (title) post.title = title;
    if (description) post.description = description;

    await post.save();

    res.status(200).json({
        status: "success",
        message: "Post updated successfully!",
        data: {
            post
        }
    });
});

export { getAllPosts, getPostById, createPost, deletePost, updatePost };
