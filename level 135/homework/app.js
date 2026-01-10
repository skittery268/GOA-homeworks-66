const express = require("express");
const morgan = require("morgan");
const phoneRouter = require("./routers/phone.router");

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use("/phones", phoneRouter);

app.listen(3000, () => {
    console.log("Server Started!");
})