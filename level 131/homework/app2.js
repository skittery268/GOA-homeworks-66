// 3) შექმენით CRUD ოპერაცია posts - ებზე, query - ში არსებული role - ის მნიშვნელობა კი შეამოწმეთ, თუ 
// admin - ია მაშინ უნდა შეგეძლოთ post - ის წაშლა და დამატება, სხვა შემთხვევაში კი უბრალოდ წამოღება

const express = require("express");

const app = express();

let posts = [
    { id: 1, title: "First Post", content: "This is the first post." },
    { id: 2, title: "Second Post", content: "This is the second post." },
    { id: 3, title: "Third Post", content: "This is the third post." },
    { id: 4, title: "Fourth Post", content: "This is the fourth post." },
    { id: 5, title: "Fifth Post", content: "This is the fifth post." },
    { id: 6, title: "Sixth Post", content: "This is the sixth post." },
    { id: 7, title: "Seventh Post", content: "This is the seventh post." },
    { id: 8, title: "Eighth Post", content: "This is the eighth post." },
    { id: 9, title: "Ninth Post", content: "This is the ninth post." },
    { id: 10, title: "Tenth Post", content: "This is the tenth post." }
];

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ message: "Post not found!" });
    }

    res.status(200).json(post);
});

app.post("/posts", (req, res) => {
    const { role, title, content } = req.query;

    if (role !== "admin") {
        return res.status(403).json({ message: "Access denied! Admins only." });
    }

    const id = posts.length + 1;
    const newPost = { id, title, content };
    posts.push(newPost);
    res.status(201).json(newPost);
})

app.delete("/posts/:id", (req, res) => {
    const { role } = req.query;
    const id = parseInt(req.params.id);

    if (role !== "admin") {
        return res.status(403).json({ message: "Access denied! Admins only." });
    }

    const postIndex = posts.findIndex(p => p.id === id);
    if (postIndex === -1) {
        return res.status(404).json({ message: "Post not found!" });
    }

    posts.splice(postIndex, 1);
    res.status(204).json({ message: "Post deleted successfully!" });
});

app.patch("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { title, content } = req.query;

    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ message: "Post not found!" });
    }

    if (title) post.title = title;
    if (content) post.content = content;

    const postIndex = posts.findIndex(p => p.id === id);

    posts.splice(postIndex, 1, post);
    res.status(200).json(post);
});

app.listen(3000, () => {
    console.log("Server Started!");
});
