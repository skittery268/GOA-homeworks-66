let posts = [
    { id: 1, title: "First Post", content: "This is the first post." },
    { id: 2, title: "Second Post", content: "This is the second post." },
    { id: 3, title: "Third Post", content: "This is the third post." }
]

const getAllPosts = (req, res) => {
    res.status(200).json(posts);
}

const getPostById = (req, res) => {
    const id = parseInt(req.params.id);

    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ message: "Post not found!" });
    }

    res.status(200).json(post);
}

const createNewPost = (req, res) => {
    const post = req.body;

    if (!post.title || !post.content) {
        return res.status(400).json({ message: "Title and Content are required!" });
    }

    posts.push({ id: Date.now(), ...post });
    res.status(201).json({ id: Date.now(), ...post });
}

const deletePost = (req, res) => {
    const id = parseInt(req.params.id);

    const postIndex = posts.findIndex(p => p.id === id);

    if (postIndex === -1) {
        return res.status(404).json({ message: "Post Not Found!" });
    }

    posts.splice(postIndex, 1);

    res.status(204).send();
}

const updatePost = (req, res) => {
    const id = parseInt(req.params.id);
    const newData = req.body;

    if (!newData.title && !newData.content) {
        return res.status(400).json({ message: "Title or Content are required!" });
    }

    let post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ message: "Post Not Found!" });
    }

    if (newData.title) post.title = newData.title;
    if (newData.content) post.content = newData.content;

    res.status(200).json(post);
}

module.exports = { getAllPosts, getPostById, createNewPost, deletePost, updatePost };