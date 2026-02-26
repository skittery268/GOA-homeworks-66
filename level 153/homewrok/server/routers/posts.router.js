const express = require('express');
const { getAllPosts, createPost, deletePost, changePost } = require('../controllers/posts.controller');

const postsRouter = express.Router();

postsRouter.get("/", getAllPosts);

postsRouter.post("/", createPost);

postsRouter.delete("/:id", deletePost);

postsRouter.put("/:id", changePost);

module.exports = postsRouter;