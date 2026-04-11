const express = require('express');
const protect = require('../middleware/auth.middleware');
const { getFriends, removeFriend } = require('../controllers/friendship.controller');

const friendshipRouter = express.Router();

friendshipRouter.get('/', protect, getFriends);
friendshipRouter.delete('/:friendshipId', protect, removeFriend);

module.exports = friendshipRouter;
