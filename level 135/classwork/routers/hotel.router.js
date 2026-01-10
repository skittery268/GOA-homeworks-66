const express = require("express");
const { getAllHotels, getHotelById, createHotel, deleteHotel, updateHotel } = require("../controllers/hotel.controller");

const hotelRouter = express.Router();

hotelRouter.get("/", getAllHotels);

hotelRouter.get("/:id", getHotelById);

hotelRouter.post("/", createHotel);

hotelRouter.delete("/:id", deleteHotel);

hotelRouter.patch("/:id", updateHotel);

module.exports = hotelRouter;