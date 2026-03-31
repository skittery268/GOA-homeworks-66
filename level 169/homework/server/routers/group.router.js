const express = require("express");
const { createGroup, deleteGroup, joinGroup } = require("../controllers/group.controller");
const protect = require("../middlewares/auth.middleware");

const groupRouter = express.Router();

groupRouter.post("/", protect, createGroup);
groupRouter.delete("/:id", protect, deleteGroup);
groupRouter.post("/:id/join", protect, joinGroup);

module.exports = groupRouter;