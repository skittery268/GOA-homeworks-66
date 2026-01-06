const express = require("express");
const postsRouter = require("./routers/posts.router");

const app = express();

app.use("/posts", postsRouter);

app.listen(3000, () => {
    console.log("Server Started!");
})