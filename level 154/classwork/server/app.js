const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const productRouter = require("./routers/product.router");
const authRouter = require("./routers/auth.router");

const app = express();

app.use(cors())

app.use(morgan("dev"));

app.use(express.json());

app.get("/test", (req, res) => {
    res.send("Server connected!");
})

app.use("/api/products", productRouter);

app.use("/api/auth", authRouter);

mongoose.connect("mongodb://localhost:27017/lulini")
    .then(() => {
        console.log("Successfull conection from mongoDB!");

        app.listen(3000, () => {
            console.log("Server started!");
        })
    })
    .catch((err) => console.log(err));
