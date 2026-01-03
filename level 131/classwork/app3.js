// 3) შექმენით CRUD ოპერაცია მთლიანად user ზე, უნდა ხდებოდეს მომხმარებლის რეგისტრაცია, ავტორიზაცია, ყველა მომხმარებლის ნახვა, ერთი მომხმარებლის ნახვა ID, მომხმარებლის წაშლა და განახლება. GET, POST, DELETE, PATCH

const express = require("express");

const app = express();

let users = [
    { id: 1, username: "user1", password: "pass1", email: "example1@gmail.com" },
    { id: 2, username: "user2", password: "pass2", email: "example2@gmail.com" },
    { id: 3, username: "user3", password: "pass3", email: "example3@gmail.com" }
];

let thisUser;

app.get("users", (req, res) => {
    res.status(200).json(users);
})

app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found!" });
    }

    res.status(200).json(user);
})

app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found!" });
    }

    users.splice(userIndex, 1);

    res.status(204).json({ message: "User deleted successfully!" });
})

app.post("/register", (req, res) => {
    const { username, password, email } = req.query;
    let allEmails = users.map(u => u.email);

    if (!username || !password || !email) {
        return res.status(400).json({ message: "Username, password, and email are required!" });
    }

    const id = users.length + 1;

    const user = { id, username, password, email };

    if (allEmails.includes(email)) {
        return res.status(400).json({ message: "Email already in use!" });
    }

    users.push(user);

    res.status(201).json({ message: "User registered successfully!", user });
})

app.post("/login", (req, res) => {
    const { email, password } = req.query;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required!" });
    }

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ message: "Invalid email or password!" });
    }

    thisUser = user;

    res.status(200).json({ message: "Login successful!", user });
})

app.patch("/users/:id", (req, res) => {
    const { username, password, email } = req.query;
    const id = parseInt(req.params.id);

    if (!username && !password && !email) {
        return res.status(400).json({ message: "username, password, or email is required to update!" });
    }

    const user = users.find(u => u.id === id);
    const userIndex = users.findIndex(u => u.id === id);

    if (user) {
        if (username && password && email) {
            user.username = username;
            user.password = password;
            user.email = email;
        } else if (username && password) {
            user.username = username;
            user.password = password;
        } else if (username && email) {
            user.username = username;
            user.password = password;
        } else if (username) {
            user.username = username;
        } else if (password && email) {
            user.password = password;
            user.email = email;
        } else if (password) {
            user.password = password;
        } else if (email) {
            user.email = email;
        }
    }

    users.splice(userIndex, 1, user);

    res.status(200).json({ message: "User updated successfully!", user });
})

app.listen(3000, () => {
    console.log("Server Started!");
})