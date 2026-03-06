const Student = require("../models/student.model");

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json({
            status: "success",
            arrayLength: students.length,
            data: students
        });
    } catch (err) {
        console.log(err);
    }
}

const addStudent = async (req, res) => {
    try {
        const { fullName, email, password, gitHub, facebook, group } = req.body;

        const newStudent = await Student.create({ fullName, email, password, gitHub, facebook, group });

        res.status(201).json({
            status: "success",
            data: newStudent
        });
    } catch (err) {
        console.log(err);
    }
}

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedStudent = await Student.findByIdAndDelete(id);

        if (!deletedStudent) {
            return res.status(404).json({
                status: "fail",
                message: "Student not found",
            });
        }

        res.status(204).json({
            status: "success",
            message: "Student deleted successfully",
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = { getAllStudents, addStudent, deleteStudent };