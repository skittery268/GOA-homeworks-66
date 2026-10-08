const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product title is required!"]
    },
    description: {
        type: String,
        required: [true, "Product description is required!"]
    }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;