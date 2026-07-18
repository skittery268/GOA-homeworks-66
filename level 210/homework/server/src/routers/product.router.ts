// Modules
import express from "express";

// Controllers
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controllers/product.controller.js";

const productRouter = express.Router();

// Route to get all products from DB (GET /api/products/all)
productRouter.get("/all", getAllProducts);
// Route to get product by id from DB (GET /api/products/:productId)
productRouter.get("/:id", getProductById);
// Route to create new product in DB (POST /api/products/create)
productRouter.post("/create", createProduct);
// Route to delete product by id (DELETE /api/products/:productId)
productRouter.delete("/:id", deleteProduct);
// Route to update product information by id (PATCH /api/products/:productId)
productRouter.patch("/:id", updateProduct);

export default productRouter;