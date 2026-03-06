const express = require('express');
const { getProduct, getProducts, createProduct, deleteProduct } = require('../controllers/product.controller');

const productRouter = express.Router();

productRouter.get("/", getProducts);

productRouter.get("/:id", getProduct);

productRouter.post("/", createProduct);

productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;