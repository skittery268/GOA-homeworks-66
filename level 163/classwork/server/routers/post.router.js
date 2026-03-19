const express = require('express');

// Controllers
const { getPosts, getPost, createPost, deletePost, updatePost, getUserPosts } = require('../controllers/post.controller');
const protect = require('../middlewares/auth.middleware');

const postsRouter = express.Router();

// Get posts
postsRouter.get('/', getPosts);
// Get user posts
postsRouter.get('/userposts', protect, getUserPosts);
// Get post by ID
postsRouter.get('/:postId', getPost);
// Create post
postsRouter.post('/', protect, createPost);
// Delete post by ID
postsRouter.delete('/:postId', protect, deletePost);
// Update post by ID
postsRouter.patch('/:postId', protect, updatePost);

module.exports = postsRouter;