const express = require('express');

// Controllers
const { createRoom, getRooms, getUserRooms, deleteRoom, editRoom } = require('../controllers/rooms.controller');
const { authenticate } = require('../utils/auth.middleware');

const roomRouter = express.Router();

roomRouter.post('/', authenticate, createRoom);
roomRouter.get('/', getRooms);
roomRouter.get('/user/:userId', getUserRooms);
roomRouter.delete('/:roomId/:userId', authenticate, deleteRoom);
roomRouter.patch('/:roomId/:userId', authenticate, editRoom);

module.exports = roomRouter;