const express = require("express");
const morgan = require("morgan");
const studentsRouter = require("./routers/students.router");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/students", studentsRouter);

app.listen(3000, () => {
    console.log("Server Started!");
})