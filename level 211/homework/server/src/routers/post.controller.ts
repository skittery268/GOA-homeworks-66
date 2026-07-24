// Modules
import express from "express";

// Controllers
import { createPost, deletePost, getAllPosts, getPostById, updatePost } from "../controllers/post.controller.js";

// Middlewares
import protect from "../middlewares/auth.middleware.js";

const postRouter = express.Router();

// Route to get all posts
postRouter.get("/get-all-posts", getAllPosts);
// Route to get post by id
postRouter.get("/get-post/:id", getPostById);
// Route to create new post
postRouter.post("/create", protect, createPost);
// Route to delete post by id
postRouter.delete("/delete/:id", protect, deletePost);
// Route to update post information
postRouter.patch("/update/:id", protect, updatePost);

export default postRouter;