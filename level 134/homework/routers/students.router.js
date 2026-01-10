const express = require("express");
const { getAllStudents, getStudentById, filterStudents, createStudent, updateStudent, deleteStudent } = require("../controllers/students.controller");

const studentsRouter = express.Router();

studentsRouter.get("/filter", filterStudents);

studentsRouter.get("/", getAllStudents);

studentsRouter.get("/:id", getStudentById);

studentsRouter.post("/", createStudent);

studentsRouter.patch("/:id", updateStudent);

studentsRouter.delete("/:id", deleteStudent);

module.exports = studentsRouter;