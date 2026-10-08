const catchAsync = require("../utils/catchAsync.util");
const Product = require("../models/product.model");
const AppError = require("../utils/appError.util");

const getProducts = catchAsync(async (req, res, next) => {
    const products = await Product.find();

    res.status(200).json({
        status: "success",
        message: "Products returned successfully!",
        data: {
            products
        }
    });
});

const getProduct = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
        return next(new AppError("Product not found!", 404));
    };

    res.status(200).json({
        status: "success",
        message: "Product returned succesfully!",
        data: {
            product
        }
    });
});

const createProduct = catchAsync(async (req, res, next) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return next(new AppError("Title and description is required!", 400));
    };

    const product = await Product.create({ title, description });

    res.status(200).json({
        status: "success",
        message: "Product created successfully!",
        data: {
            product
        }
    });
});

const deleteProduct = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
        return next(new AppError("Product not found!", 404));
    };

    res.status(200).json({
        status: "success",
        message: "Product deleted successfully!"
    });
});

const editProduct = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const { title, description } = req.body;

    const product = await Product.findById(id);

    if (!product) {
        return next(new AppError("Product not found!", 404));
    };

    if (title) product.title = title;
    if (description) product.description = description;

    await product.save();

    res.status(200).json({
        status: "success",
        message: "Product edited successfully!",
        data: {
            product
        }
    });
});

module.exports = { getProducts, getProduct, createProduct, deleteProduct, editProduct };