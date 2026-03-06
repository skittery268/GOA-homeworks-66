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
    productCount: {
        type: Number,
        default: 1
    },
    price: {
        type: Number,
        default: 1
    }
})

const Product = mongoose.model("products", productSchema);

module.exports = Product;

