const express = require("express");
const { getAllPosts, getPostsByAuthorId, createPost, deletePost, updatePost } = require("../controllers/posts.controller");

const postsRouter = express.Router();

postsRouter.get("/", getAllPosts);

postsRouter.get("/:authorId", getPostsByAuthorId);

postsRouter.post("/", createPost);

postsRouter.delete("/:id", deletePost);

postsRouter.patch("/:id", updatePost);

module.exports = postsRouter;