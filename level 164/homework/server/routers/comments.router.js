const express = require('express');
const { addComment, deleteComment, updateComment } = require('../controllers/comments.controller');
const protect = require('../middleware/auth.middleware');

const commentsRouter = express.Router();

commentsRouter.post('/:postId', protect, addComment);
commentsRouter.delete('/:postId/:commentId', protect, deleteComment);
commentsRouter.patch('/:postId/:commentId', protect, updateComment);

module.exports = commentsRouter;