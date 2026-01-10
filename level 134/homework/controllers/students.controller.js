let students = [
    { id: 1, name: "Alice", grade: "A", role: "student" },
    { id: 2, name: "Bob", grade: "B", role: "student" },
    { id: 3, name: "Charlie", grade: "C", role: "student" },
    { id: 4, name: "David", grade: "A", role: "student" },
    { id: 5, name: "Eve", grade: "B", role: "student" },
    { id: 6, name: "Frank", grade: "C", role: "student" },
    { id: 7, name: "Grace", grade: "A", role: "student" },
    { id: 8, name: "Heidi", grade: "B", role: "student" },
    { id: 9, name: "Ivan", grade: "C", role: "student" },
    { id: 10, name: "Judy", grade: "A", role: "student" }
]

const getAllStudents = (req, res) => {
    res.status(200).json(students);
}

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student Not Found!" });
    }

    res.status(200).json(student);
}

const filterStudents = (req, res) => {
    const { grade } = req.query;

    if (!grade) {
        return res.status(400).json({ message: "Grade are required to filter students!" });
    }

    const filteredStudents = students.filter(s => s.grade === grade);

    res.status(200).json(filteredStudents);
}

const createStudent = (req, res) => {
    let student = req.body;

    if (!student.name || !student.grade || !student.role) {
        return res.status(400).json({ message: "Student name, grade and role are required!" });
    }

    const id = students.length + 1;

    students.push({ id, ...student });
    res.status(201).json({ id, ...student });
}

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const body = req.body;

    if (!body.name && !body.grade && !body.role) {
        return res.status(400).json({ message: "Student name, grade or role are required!" });
    }

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found!" });
    }

    if (body.name) student.name = body.name;
    if (body.grade) student.grade = body.grade;
    if (body.role) student.role = body.role;

    res.status(200).json(student);
}

const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);

    const studentIndex = students.findIndex(s => s.id === id);

    if (studentIndex === -1) {
        return res.status(404).json({ message: "Student not found!" });
    }

    students.splice(studentIndex, 1);
    res.status(204).send();
}

module.exports = { getAllStudents, getStudentById, filterStudents, createStudent, updateStudent, deleteStudent };
