const express = require("express");
const { getAllPosts, getPost, createPost, deletePost, editPost, getUserPosts } = require("../controllers/posts.controller");

const postsRouter = express.Router();

postsRouter.get("/", getAllPosts);

postsRouter.get("/:postId", getPost);

postsRouter.get("/:userId", getUserPosts);

postsRouter.post("/createpost", createPost);

postsRouter.delete("/:postId", deletePost);

postsRouter.patch("/:postId", editPost);

module.exports = postsRouter;