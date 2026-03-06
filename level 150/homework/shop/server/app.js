const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routers/product.router");

const app = express();

app.use(express.json());

app.use("/api/products", productRouter);

mongoose.connect("mongodb://localhost:27017/shop")
    .then(() => {
        console.log("Local mongoDB connected!");

        app.listen(3000, () => {
            console.log("Server Started!");
        })
    })
    .catch((err) => console.log(err));
