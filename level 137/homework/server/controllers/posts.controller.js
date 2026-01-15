const { readFile, writeFile, deleteObj, updatePostInDB } = require("../utils/file");

const getAllPosts = (req, res) => {
    res.status(200).json(readFile("posts.json"));
}

const getPostsByAuthorId = (req, res) => {
    const authorId = parseInt(req.params.authorId);

    const posts = readFile("posts.json");

    const authorPosts = posts.filter(p => p.authorId === authorId);

    if (authorPosts.length === 0) {
        return res.status(404).json({ message: "Posts not found!" });
    }

    res.status(200).json(authorPosts);
}

const createPost = (req, res) => {
    const bodyData = req.body;

    if (!bodyData.title || !bodyData.content || !bodyData.authorId) {
        return res.status(400).json({ message: "Title, Content and author ID are required!" });
    }

    const id = Date.now();

    const newPost = { id, ...bodyData };

    writeFile("posts.json", newPost);

    res.status(201).json(newPost);
}

const deletePost = (req, res) => {
    const id = parseInt(req.params.id);

    const posts = readFile("posts.json");

    const postIndex = posts.findIndex(p => p.id === id);

    if (postIndex === -1) {
        return res.status(404).json({ message: "Post Not Found!" });
    }

    deleteObj("posts.json", id);

    res.status(204).send();
}

const updatePost = (req, res) => {
    const id = parseInt(req.params.id);
    const bodyData = req.body;

    if (!bodyData.title && !bodyData.content) {
        return res.status(400).json({ message: "Title or Content are required!" });
    }
    
    updatePostInDB(bodyData, id);

    res.status(200).json({ message: "Post updated successfull" });
}

module.exports = { getAllPosts, getPostsByAuthorId, createPost, deletePost, updatePost };

