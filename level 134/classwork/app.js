const express = require("express");

const app = express();

const bikesRouter = require("./routers/bikes.router.js");

app.use(express.json());

app.use("/bikes", bikesRouter);

app.listen(3000, () => {
    console.log("Server Started!");
})