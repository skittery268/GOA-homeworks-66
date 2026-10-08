const express = require("express");
const { getProducts, getProduct, createProduct, deleteProduct, editProduct } = require("../controllers/product.controller");

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.get("/:id", getProduct);
productRouter.post("/", createProduct);
productRouter.delete("/:id", deleteProduct);
productRouter.patch("/:id", editProduct);

module.exports = productRouter;