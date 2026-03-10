const express = require('express');

// Controllers
const { createBooking, getBookings, getUserBookings, deleteBooking, editBooking } = require('../controllers/bookings.controller');
const { authenticate } = require('../utils/auth.middleware');

const bookingRouter = express.Router();

bookingRouter.post('/', authenticate, createBooking);
bookingRouter.get('/', getBookings);
bookingRouter.get('/user/:userId', getUserBookings);
bookingRouter.delete('/:bookingId/:userId', authenticate, deleteBooking);
bookingRouter.patch('/:bookingId/:userId', authenticate, editBooking);

module.exports = bookingRouter;