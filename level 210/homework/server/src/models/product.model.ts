// Modules
import mongoose from "mongoose";

// Schema for product model
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product title is required!"]
    },
    description: {
        type: String,
        required: [true, "Product description is required!"]
    },
    price: {
        type: Number,
        required: [true, "Product price is required!"]
    },
    stock: {
        type: Number,
        default: 1
    }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

export default Product;