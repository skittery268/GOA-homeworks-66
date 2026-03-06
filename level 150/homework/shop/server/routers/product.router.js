const express = require("express");
const { addProduct, getProducts, getProduct, deleteProduct, editProduct } = require("../controllers/product.controller");

const productRouter = express.Router();

productRouter.post("/", addProduct);
productRouter.get("/", getProducts);
productRouter.get("/:id", getProduct);
productRouter.delete("/:id", deleteProduct);
productRouter.patch("/:id", editProduct);

module.exports = productRouter;