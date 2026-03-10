const { writeFile, readFile } = require("../utils/file");
const path = require('path');
const fs = require('fs');

const FILE_URL = path.join(__dirname, '../database/bookings.json');

// To create new booking
const createBooking = (req, res) => {
    const { userId, roomId, checkIn, checkOut } = req.body;

    if(!userId || !roomId || !checkIn || !checkOut) {
        return res.status(400).json({ message: "All data is required!" });
    };

    const booking = {
        userId,
        roomId,
        checkIn,
        checkOut,
        id: Date.now()
    };

    writeFile(booking, FILE_URL);

    res.status(201).json(booking);
};

// To get all bookings
const getBookings = (req, res) => {
    const bookings = readFile(FILE_URL);

    res.json(bookings);
};

// To get user bookings
const getUserBookings = (req, res) => {
    const { userId } = req.params;

    if(!userId) {
        return res.status(400).json({ message: "User ID is required!" });
    }

    const bookings = readFile(FILE_URL);
    const usersBookings = bookings.filter(booking => booking.userId === Number(userId));

    res.json(usersBookings);
};

// To delete booking
const deleteBooking = (req, res) => {
    const { bookingId, userId } = req.params;

    const bookings = readFile(FILE_URL);
    const booking = bookings.find(b => b.id === Number(bookingId));

    if(!booking) {
        return res.status(404).json({ message: "Booking not found!" });
    }

    if(booking.userId !== Number(userId)) {
        return res.status(401).json({ message: "You are not authorized to delete this booking!" });
    }

    const newBookings = bookings.filter(b => b.id !== Number(bookingId));
    fs.writeFileSync(FILE_URL, JSON.stringify(newBookings));

    res.status(200).json(newBookings);
};

// To edit booking
const editBooking = (req, res) => {
    const { bookingId, userId } = req.params;
    const { checkIn, checkOut } = req.body;

    const bookings = readFile(FILE_URL);
    const booking = bookings.find(b => b.id === Number(bookingId));

    if(!booking) {
        return res.status(404).json({ message: "Booking not found!" });
    }

    if(booking.userId !== Number(userId)) {
        return res.status(401).json({ message: "You are not authorized to edit this booking!" });
    }

    if(checkIn) booking.checkIn = checkIn;
    if(checkOut) booking.checkOut = checkOut;

    fs.writeFileSync(FILE_URL, JSON.stringify(bookings));
    res.status(200).json(bookings);
};

module.exports = { createBooking, getBookings, getUserBookings, deleteBooking, editBooking };