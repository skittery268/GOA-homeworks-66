const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postsRouter = require("./routers/post.router");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/posts", postsRouter);

mongoose.connect("mongodb://localhost:27017/shop")
    .then(() => {
        console.log("Local mongoDB connected!");

        app.listen(3000, () => {
            console.log("Server Started!");
        })
    })
