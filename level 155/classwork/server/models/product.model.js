const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        default: 1
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    }
})

const Product = mongoose.model("product", productSchema);

module.exports = Product;