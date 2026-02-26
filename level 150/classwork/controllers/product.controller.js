const Product = require("../models/product.model");

const createProduct = async (req, res) => {
    try {
        const { name, description, stock, price, img } = req.body;

        const newProduct = Product.create({ name, description, stock, price, img });

        res.status(201).json(newProduct);
    } catch (err) {
        console.log(err);
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json(products);
    } catch (err) {
        console.log(err);
    }
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.find({ _id: id });

        if (!product) {
            return res.status(404).json({ message: "Product not found!" });
        }

        res.status(200).json(product);
    } catch (err) {
        console.log(err);
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedProduct = await Product.deleteOne({ _id: id });

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found!" });
        }

        res.status(200).json({ message: "Product deleted!" });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {  createProduct, getProducts, getProduct, deleteProduct };