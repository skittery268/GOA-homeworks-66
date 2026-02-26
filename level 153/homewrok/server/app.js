const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());



mongoose.connect("mongodb://localhost:27017/socialMedia")
    .then(() => { 
        console.log("DB connected")

        app.listen(3000, () => {
            console.log("Server is running on port 3000")
        });
    })
    .catch((err) => {
        console.log(err)
    });