const express = require('express');
const { getAllGroups, addGroup, deleteGroup } = require('../controllers/group.controller');

const groupRouter = express.Router();

groupRouter.get("/", getAllGroups);

groupRouter.post("/", addGroup);

groupRouter.delete("/:id", deleteGroup);

module.exports = groupRouter;