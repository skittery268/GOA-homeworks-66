const express = require("express");
const bodyChecker = require("../middleware/bodyChecker");
const { getAllPhones, getPhoneById, createPhone, deletePhone, updatePhone } = require("../controllers/phone.controller");

const phoneRouter = express.Router();

phoneRouter.get("/", getAllPhones)

phoneRouter.get("/:id", getPhoneById)

phoneRouter.post("/", bodyChecker, createPhone)

phoneRouter.delete("/:id", deletePhone)

phoneRouter.patch("/:id", bodyChecker, updatePhone)

module.exports = phoneRouter;