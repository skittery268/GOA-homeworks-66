const Post = require("../models/post.model");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

const addComment = catchAsync(async (req, res, next) => {
    const { postId } = req.params;
    const { title, content } = req.body;

    const post = await Post.findById(postId);

    if (!post) {
        return next(new AppError("Post not found!", 404));
    }

    const newComment = { id: Date.now().toString(), title, content };

    post.comments.push(newComment);
    await post.save();

    res.status(201).json({
        status: "success",
        message: "Comment added successfully!",
        data: {
            comment: newComment
        }
    });
})

const deleteComment = catchAsync(async (req, res, next) => {
    const { postId, commentId } = req.params;

    const post = await Post.findById(postId);

    if (!post) {
        return next(new AppError("Post not found!", 404));
    }

    const commentIndex = post.comments.findIndex(comment => comment.id === commentId);

    if (commentIndex === -1) {
        return next(new AppError("Comment not found!", 404));
    }

    post.comments.splice(commentIndex, 1);
    await post.save();

    res.status(200).json({
        status: "success",
        message: "Comment deleted successfully!"
    });
})

const updateComment = catchAsync(async (req, res, next) => {
    const { postId, commentId } = req.params;
    const { title, content } = req.body;

    const post = await Post.findById(postId);

    if (!post) {
        return next(new AppError("Post not found!", 404));
    }

    const comment = post.comments.find(comment => comment.id === commentId);

    if (!comment) {
        return next(new AppError("Comment not found!", 404));
    }

    if (title) comment.title = title;
    if (content) comment.content = content;

    await post.save();

    res.status(200).json({
        status: "success",
        message: "Comment updated successfully!",
        data: {
            comment
        }
    });
})

module.exports = { addComment, deleteComment, updateComment };