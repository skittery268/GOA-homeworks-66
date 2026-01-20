const path = require("path");
const { writeFile } = require("../utils/file");

const URL = path.join(__dirname, "../database/posts.json");

const createPost = (req, res) => {
    const { title, content, userId } = req.body;

    if (!title || !content || !userId) {
        return res.status(400).json({ message: "title, content and userId are required!" });
    }

    const newPost = { id: Date.now(), title, content, userId };

    writeFile(newPost, URL);

    res.status(201).json(newPost);
}

module.exports = { createPost };