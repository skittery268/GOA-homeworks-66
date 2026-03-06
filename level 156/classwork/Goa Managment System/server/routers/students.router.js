const express = require('express');
const { getAllStudents, addStudent, deleteStudent } = require('../controllers/students.controller');

const studentsRouter = express.Router();

studentsRouter.get("/", getAllStudents);

studentsRouter.post("/", addStudent);

studentsRouter.delete("/:id", deleteStudent);

module.exports = studentsRouter;