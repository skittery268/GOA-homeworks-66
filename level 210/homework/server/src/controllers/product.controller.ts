// Types
import type { NextFunction, Request, Response } from "express";

// Utils
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";

// Models
import Product from "../models/product.model.js";

// Controller to get all products
const getAllProducts = catchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const products = await Product.find();

    res.status(200).json({
        status: "success",
        message: "Products returned successfully!",
        data: {
            products
        }
    });
});

// Controller to get product by id
const getProductById = catchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
        return next(new AppError("Product not found!", 404));
    };

    res.status(200).json({
        status: "success",
        message: "Product returned successfully!",
        data: {
            product
        }
    });
});

// Controller to create new product
const createProduct = catchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { title, description, price, stock } = req.body;

    const product = await Product.create({ title, description, price, stock });

    res.status(201).json({
        status: "success",
        message: "Product created successfully!",
        data: {
            product
        }
    });
});

// Controller to delete product by id
const deleteProduct = catchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;

    await Product.findByIdAndDelete(id);

    res.status(200).json({
        status: "success",
        message: "Product deleted successfully!"
    });
});

// Controller to update product information by id
const updateProduct = catchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    const { title, description, price, stock } = req.body;

    const product = await Product.findById(id);

    if (!product) {
        return next(new AppError("Product not found!", 404));
    };

    if (title) product.title = title;
    if (description) product.description = description;
    if (price) product.price = price;
    if (stock) product.stock = stock;

    await product.save();

    res.status(200).json({
        status: "success",
        message: "Product updated successfully!",
        data: {
            product
        }
    });
});

export { getAllProducts, getProductById, createProduct, deleteProduct, updateProduct };