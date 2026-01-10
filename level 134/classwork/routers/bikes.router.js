const express = require("express");
const { getAllBikes, getBikeById, createBike, deleteBike, updateBike } = require("../controllers/bikes.controller");

const bikesRouter = express.Router();

bikesRouter.get("/", getAllBikes);

bikesRouter.get("/:id", getBikeById);

bikesRouter.post("/", createBike);

bikesRouter.delete("/:id", deleteBike);

bikesRouter.patch("/:id", updateBike);

module.exports = bikesRouter;