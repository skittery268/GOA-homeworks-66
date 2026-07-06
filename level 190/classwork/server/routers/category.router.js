const express = require('express');
const { protect, allowedTo } = require('../middlewares/protect.middleware');
const { getCategories, createCategory, deleteCategory, editCategory } = require('../controllers/category.controller');
const upload = require('../config/upload.config');
const { createCategoryLimit, deleteCategoryLimit, editCategoryLimit } = require("../config/rateLimiter.config");

const categoryRouter = express.Router();

// Get all categories
categoryRouter.get('/', getCategories);

// Create new category
categoryRouter.post('/', createCategoryLimit, protect, allowedTo('admin'), upload.single("image"), createCategory);

// Delete category
categoryRouter.delete('/:id', deleteCategoryLimit, protect, allowedTo('admin'), deleteCategory);

// Edit category
categoryRouter.patch('/:id', editCategoryLimit, protect, allowedTo('admin'), upload.single("image"), editCategory);

module.exports = categoryRouter ;