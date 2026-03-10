const express = require('express');

// Controllers
const { getPosts, getPost, createPost, deletePost, updatePost } = require('../controllers/post.controller');

const postsRouter = express.Router();

// Get posts
postsRouter.get('/', getPosts);
// Get post by ID
postsRouter.get('/:postId', getPost);
// Create post
postsRouter.post('/', createPost);
// Delete post by ID
postsRouter.delete('/:postId', deletePost);
// Update post by ID
postsRouter.patch('/:postId', updatePost);

module.exports = postsRouter;