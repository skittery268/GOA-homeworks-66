const express = require("express");

const usersRouter = express.Router();

let users = [
    { id: 1, userName: "Alice", email: "example1@gmail.com", password: "alice123" },
    { id: 2, userName: "Bob", email: "example2@gmail.com", password: "bob456" },
    { id: 3, userName: "Charlie", email: "example3@gmail.com", password: "charlie789" }
];

usersRouter.get("/", (req, res) => {
    res.status(200).json(users);
})

usersRouter.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User Not Found!" });
    }

    res.status(200).json(user);
})

usersRouter.post("/login", (req, res) => {
    const id = users.length + 1;

    const { userName, password, email } = req.query;

    if (!userName || !password || !email) {
        return res.status(400).json({ message: "User name, email and password are required!" });
    }

    const alreadyUser = users.find(u => u.email === email);

    if (alreadyUser) {
        return res.status(400).json({ message: "Account in this email already exist!" });
    }
    
    const user = { id, userName, email, password };

    users.push(user);
    res.status(201).json(user);
})

usersRouter.post('/signin', (req, res) => {
    const { email, password } = req.query;

    if(!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    const user = users.find(u => u.email === email && u.password === password);

    if(!user) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({...user, password: undefined});
});

usersRouter.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ message: "User Not Found!" });
    }

    users.splice(userIndex, 1);

    res.status(204).send();
})

usersRouter.patch("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { userName, email, password } = req.query;

    if (!userName && !email && !password) {
        return res.status(400).json({ message: "User name, email or password are required!" });
    }

    const user = users.find(u => u.id === id);
    const userIndex = users.findIndex(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User Not Found!" });
    }

    if (userName) user.userName = userName;
    if (email) user.email = email;
    if (password) user.password = password;

    users.splice(userIndex, 1, user);

    res.status(200).json({ message: "Information are updated!" });
})

module.exports = usersRouter;