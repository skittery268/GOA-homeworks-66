const express = require("express");
const { getAllPosts, getPostById, createNewPost, deletePost, updatePost } = require("../controllers/posts.controller");

const postsRouter = express.Router();

postsRouter.use(express.json());

postsRouter.get("/", getAllPosts);

postsRouter.get("/:id", getPostById);

postsRouter.post("/", createNewPost);

postsRouter.delete("/:id", deletePost);

postsRouter.patch("/:id", updatePost);

module.exports = postsRouter;