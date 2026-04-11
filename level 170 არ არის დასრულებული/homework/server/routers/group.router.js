const express = require("express");
const { createGroup, deleteGroup, joinGroup, getUserGroups, getAllGroups } = require("../controllers/group.controller");
const protect = require("../middlewares/auth.middleware");

const groupRouter = express.Router();

groupRouter.post("/", protect, createGroup);
groupRouter.delete("/:id", protect, deleteGroup);
groupRouter.get("/my-groups", protect, getUserGroups);
groupRouter.post("/join/:id", protect, joinGroup);
groupRouter.get("/", getAllGroups);

module.exports = groupRouter;