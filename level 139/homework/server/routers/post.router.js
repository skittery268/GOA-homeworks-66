const express = require('express');

// Controllers
const { createPost, getPosts, deletePost, editPost } = require('../controllers/post.controller');

const postRouter = express.Router();

postRouter.post('/', createPost);
postRouter.get('/', getPosts);
postRouter.delete('/:postId/:userId', deletePost);
postRouter.patch('/:postId/:userId', editPost);

module.exports = postRouter;