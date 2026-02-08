const { writeFile, readFile } = require("../utils/file");
const path = require('path');
const fs = require("fs");

const FILE_URL = path.join(__dirname, '../database/posts.json');

const createPost = (req, res) => {
    const { title, content, userId } = req.body;

    if(!title || !content || !userId) {
        return res.status(400).json({ message: "All data is required!" });
    };

    const post = {
        title,
        content,
        userId,
        id: Date.now()
    };

    writeFile(post, FILE_URL);

    res.status(201).json(post);
};

const getPosts = (req, res) => {
    const posts = readFile(FILE_URL);

    res.json(posts);
};

const getUserPosts = (req, res) => {
    const { userId } = req.params;

    if(!userId) {
        return res.status(400).json({ message: "User ID is required!" });
    }

    const posts = readFile(FILE_URL);
    const usersPosts = posts.filter(post => post.userId === Number(userId));

    res.json(usersPosts);
};

const deletePost = (req, res) => {
    const { post, user } = req.body;

    if (!post.userId !== user.id) {
        return res.status(401).json({ message: "You can't delete this post!" });
    }

    const posts = readFile(FILE_URL);

    const newPosts = posts.filter(p => p.id !== post.id);

    fs.writeFileSync(FILE_URL, JSON.stringify(newPosts));

    res.status(200).json(newPosts);
}

module.exports = { createPost, getPosts, getUserPosts, deletePost };