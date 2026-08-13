const express = require("express");
const {
    createGroup,
    updateGroup,
    deleteGroup,
    joinGroup,
    leaveGroup,
    getUserGroups,
    getAllGroups,
    getGroup
} = require("../controllers/group.controller");
const protect = require("../middlewares/auth.middleware");

const groupRouter = express.Router();

// Group data is only for logged in users.
groupRouter.use(protect);

groupRouter.get("/", getAllGroups);
groupRouter.post("/", createGroup);
groupRouter.get("/my-groups", getUserGroups);
groupRouter.get("/:id", getGroup);
groupRouter.patch("/:id", updateGroup);
groupRouter.delete("/:id", deleteGroup);
groupRouter.post("/join/:id", joinGroup);
groupRouter.post("/leave/:id", leaveGroup);

module.exports = groupRouter;
