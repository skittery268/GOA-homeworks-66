const express = require('express');

// Controllers
const { createPost, getPosts, getUserPosts, deletePost, updatePost } = require('../controllers/post.controller');

const postRouter = express.Router();

postRouter.post('/', createPost);

postRouter.get('/', getPosts);

postRouter.get('/user/:userId', getUserPosts);

postRouter.delete("/:postId", deletePost);

postRouter.patch("/", updatePost);

module.exports = postRouter;