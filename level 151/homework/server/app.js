const express = require("express");
const mongoose = require("mongoose");
const filmsRouter = require("./routers/films.router");

const app = express();
app.use(express.json());

app.use("/api/films", filmsRouter);

mongoose.connect("mongodb://localhost:27017/moves")
    .then(() => {
        console.log("Connected to MongoDB");

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB", err);
    });