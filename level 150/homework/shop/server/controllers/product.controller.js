const Product = require("../models/product.model")

const addProduct = async (req, res) => {
    try {
        const { name, description, productCount, price } = req.body;

        const newProduct = await Product.create({ name, description, productCount, price });

        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findOne({ _id: id });

        if (!product) {
            return res.status(404).json({ message: "Product Not Found!" });
        }

        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        await Product.deleteOne({ _id: id });

        res.status(204).json({ message: "Product deleted successfull!" });
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const editProduct = async (req, res) => {
    try {
        const { name, description, productCount, price } = req.body;
        const { id } = req.params;

        const product = await Product.findOne({ _id: id });

        if (!product) {
            return res.status(404).json({ message: "Product Not Found!" });
        }

        if (name) product.name = name;
        if (description) product.description = description;
        if (productCount) product.productCount = productCount;
        if (price) product.price = price;

        await product.save();

        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

module.exports = { addProduct, getProducts, getProduct, deleteProduct, editProduct };