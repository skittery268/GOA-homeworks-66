const Post = require("../models/post.model")

const addPost = async (req, res) => {
    try {
        const { title, content } = req.body;

        const newPost = await Post.create({ title, content });

        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        await Post.deleteOne({ _id: id });

        res.status(204).json({ message: "Post deleted successfull!" });
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const editPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const { id } = req.params;

        const post = await Post.findOne({ _id: id });

        if (!post) {
            return res.status(404).json({ message: "Post Not Found!" });
        }

        if (title) post.title = title;
        if (content) post.content = content;

        await post.save();

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

module.exports = { addPost, getPosts, deletePost, editPost };