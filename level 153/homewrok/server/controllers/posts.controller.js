const Post = require("../models/post.model");

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();    

        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const createPost = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json("All fields are required");
        }

        const newPost = await Post.create({ title, description });

        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedPost = await Post.deleteOne({ _id: id });

        if (deletedPost.deletedCount === 0) {
            return res.status(404).json("Post not found");
        }

        res.status(200).json("Post deleted successfully");
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const changePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json("All fields are required");
        }

        if (title) await Post.updateOne({ _id: id }, { $set: { title } });
        if (description) await Post.updateOne({ _id: id }, { $set: { description } });
        
        res.status(200).json(await Post.findById(id));
    } catch (err) {
        res.status(500).json(err.message);
    }
}

module.exports = { getAllPosts, createPost, deletePost, changePost };