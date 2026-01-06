const express = require("express");

const postsRouter = express.Router();

let posts = [
    { id: 1, title: "First Post", content: "This is the first post." },
    { id: 2, title: "Second Post", content: "This is the second post." },
    { id: 3, title: "Third Post", content: "This is the third post." }
]

postsRouter.get("/", (req, res) => {
    res.status(200).json(posts);
})

postsRouter.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ message: "Post not found!" });
    }

    res.status(200).json(post);
})

postsRouter.post("/", (req, res) => {
    const { title, content } = req.query;

    if (!title || !content) {
        return res.status(400).json({ message: "Title and Content are required!" });
    }

    const id = Date.now();

    const post = { id, title, content };

    posts.push(post);

    res.status(201).json(post);
})

postsRouter.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const postIndex = posts.findIndex(p => p.id === id);

    if (postIndex === -1) {
        return res.status(404).json({ message: "Post Not Found!" });
    }

    posts.splice(postIndex, 1);

    res.status(204).send();
})

postsRouter.patch("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { title, content } = req.query;

    if (!title && !content) {
        return res.status(400).json({ message: "Title or Content are required!" });
    }

    let post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ message: "Post Not Found!" });
    }

    if (title) post.title = title;
    if (content) post.content = content;

    res.status(200).json(post);
})

module.exports = postsRouter;