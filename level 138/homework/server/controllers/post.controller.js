const { writeFile, readFile, deleteContent, updateContent } = require("../utils/file");
const path = require('path');

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
    const usersPosts = posts.filter(post => post.userId === parseInt(userId));

    res.json(usersPosts);
};

const deletePost = (req, res) => {
    const postId = req.params.postId;

    const posts = readFile(FILE_URL);

    const userPost = posts.find(p => p.id === parseInt(postId));

    if (!userPost) {
        return res.status(404).json({ message: "Post Not Found!" });
    }

    deleteContent(userPost, FILE_URL);

    res.status(204).json();
}

const updatePost = (req, res) => {
    const data = req.body;

    if (!data.title && !data.content) {
        return res.status(400).json({ message: "Title or Content are required!" });
    }

    const posts = readFile(FILE_URL);

    const post = posts.find(p => p.id === parseInt(data.id));

    if (!post) {
        return res.status(404).json({ message: "Post not found!" });
    }

    updateContent(post, data, FILE_URL);

    res.status(200).json({ message: "Post updated successfully!" });
}

module.exports = { createPost, getPosts, getUserPosts, deletePost, updatePost };