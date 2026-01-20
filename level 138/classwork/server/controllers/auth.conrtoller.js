const { readFile, writeFile } = require("../utils/file");

const path = require("path");

const URL = path.join(__dirname, "../database/users.json");

const register = (req, res) => {
    const { userName, userEmail, userPassword } = req.body;

    if (!userName || !userEmail || !userPassword) {
        return res.status(400).json({ message: "user name, email and password are required!" });
    }

    const users = readFile(URL);

    const isExist = users.find(user => user.userEmail === userEmail);

    if (isExist) {
        return res.status(400).json({ message: "User already exists!" });
    }

    const user = { userName, userEmail, userPassword, id: Date.now() };

    writeFile(user, URL);

    res.status(201).json({ message: "User registered successfully!" });
}

const login = (req, res) => {
    const { userEmail, userPassword } = req.body;

    if (!userEmail || !userPassword) {
        return res.status(400).json({ message: "user email and password are required!" });
    }

    const users = readFile(URL);

    const user = users.find(u => u.userEmail === userEmail && u.userPassword === userPassword);

    if (!user) {
        return res.status(400).json({ message: "Invalid email or password!" });
    }

    res.status(200).json({ ...user, userPassword: undefined });
}

module.exports = { register, login };