const express = require('express');
const mongoose = require('mongoose');
const studentsRouter = require('./routers/students.router');
const userRouter = require('./routers/user.router');
const groupRouter = require('./routers/group.router');

const app = express();

app.use(express.json());

app.use("/api/students", studentsRouter);

app.use("/api/users", userRouter);

app.use("/api/groups", groupRouter)

mongoose.connect("mongodb://localhost:27017/goa")
    .then(() => {
        console.log("Connected to local MongoDB");

        app.listen(3000, () => {
            console.log('Server Started!');
        });
    })
    .catch((err) => {
        console.log(err);
    });