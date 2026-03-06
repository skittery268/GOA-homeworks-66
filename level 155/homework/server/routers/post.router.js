const express = require("express");
const { addPost, getPosts, deletePost, editPost } = require("../controllers/post.controller");

const postsRouter = express.Router();

postsRouter.post("/", addPost);
postsRouter.get("/", getPosts);
postsRouter.delete("/:id", deletePost);
postsRouter.patch("/:id", editPost);

module.exports = postsRouter;