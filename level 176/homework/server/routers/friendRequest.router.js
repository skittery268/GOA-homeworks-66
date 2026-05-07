const express = require('express');
const protect = require('../middleware/auth.middleware');
const { sendFriendRequest, cancelFriendRequest, rejectFriendRequest, acceptFriendRequest, getFriendRequests } = require('../controllers/friendRequest.controller');

const friendRequestRouter = express.Router();

friendRequestRouter.post('/send/:to', protect, sendFriendRequest);
friendRequestRouter.delete('/cancel/:reqId', protect, cancelFriendRequest);
friendRequestRouter.delete('/reject/:reqId', protect, rejectFriendRequest);
friendRequestRouter.post('/accept/:reqId', protect, acceptFriendRequest);
friendRequestRouter.get('/', protect, getFriendRequests);

module.exports = friendRequestRouter;
