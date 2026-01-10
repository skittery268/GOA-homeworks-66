const express = require("express");
const morgan = require("morgan");
const hotelRouter = require("./routers/hotel.router");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/hotels", hotelRouter);

app.listen(3000, () => {
    console.log("Server Started!");
})