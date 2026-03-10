const { writeFile, readFile } = require("../utils/file");
const path = require('path');
const fs = require('fs');

const FILE_URL = path.join(__dirname, '../database/rooms.json');

// To create new room
const createRoom = (req, res) => {
    const { hotelName, roomType, price, userId } = req.body;

    if(!hotelName || !roomType || !price || !userId) {
        return res.status(400).json({ message: "All data is required!" });
    };

    const room = {
        hotelName,
        roomType,
        price,
        userId,
        id: Date.now()
    };

    writeFile(room, FILE_URL);

    res.status(201).json(room);
};

// To get all rooms
const getRooms = (req, res) => {
    const rooms = readFile(FILE_URL);

    res.json(rooms);
};

// To get user rooms
const getUserRooms = (req, res) => {
    const { userId } = req.params;

    if(!userId) {
        return res.status(400).json({ message: "User ID is required!" });
    }

    const rooms = readFile(FILE_URL);
    const usersRooms = rooms.filter(room => room.userId === Number(userId));

    res.json(usersRooms);
};

// To delete room
const deleteRoom = (req, res) => {
    const { roomId, userId } = req.params;

    const rooms = readFile(FILE_URL);
    const room = rooms.find(r => r.id === Number(roomId));

    if(!room) {
        return res.status(404).json({ message: "Room not found!" });
    }

    if(room.userId !== Number(userId)) {
        return res.status(401).json({ message: "You are not authorized to delete this room!" });
    }

    const newRooms = rooms.filter(r => r.id !== Number(roomId));
    fs.writeFileSync(FILE_URL, JSON.stringify(newRooms));

    res.status(200).json(newRooms);
};

// To edit room
const editRoom = (req, res) => {
    const { roomId, userId } = req.params;
    const { hotelName, roomType, price } = req.body;

    const rooms = readFile(FILE_URL);
    const room = rooms.find(r => r.id === Number(roomId));

    if(!room) {
        return res.status(404).json({ message: "Room not found!" });
    }

    if(room.userId !== Number(userId)) {
        return res.status(401).json({ message: "You are not authorized to edit this room!" });
    }

    if(hotelName) room.hotelName = hotelName;
    if(roomType) room.roomType = roomType;
    if(price) room.price = price;

    fs.writeFileSync(FILE_URL, JSON.stringify(rooms));
    res.status(200).json(rooms);
};



module.exports = { createRoom, getRooms, getUserRooms, deleteRoom, editRoom };