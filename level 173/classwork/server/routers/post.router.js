const express = require('express');

// Controllers
const { getPosts, getUserPosts, getPost, createPost, deletePost, updatePost } = require('../controllers/post.controller');
const protect = require('../middleware/auth.middleware');
const upload = require('../utils/image');

const postsRouter = express.Router();

// Get posts
postsRouter.get('/', getPosts);
// Get posts by user ID
postsRouter.get('/user/:userId', getUserPosts);
// Get post by ID
postsRouter.get('/:postId', getPost);
// Create post
postsRouter.post('/', protect, upload.single('postImage'), createPost);
// Delete post by ID
postsRouter.delete('/:postId', protect, deletePost);
// Update post by ID
postsRouter.patch('/:postId', protect, updatePost);

module.exports = postsRouter;