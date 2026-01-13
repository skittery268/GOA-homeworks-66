const { readFile, writeFile } = require("../utils/file");

const register = (req, res) => {
    const { userName, userEmail, userPassword } = req.body;

    if (!userName || !userEmail || !userPassword) {
        return res.status(400).json({ message: "user name, email and password are required!" });
    }

    const users = readFile();

    const isExist = users.find(user => user.userEmail === userEmail);

    if (isExist) {
        return res.status(409).json({ message: "User already exists!" });
    }

    const user = { userName, userEmail, userPassword, id: Date.now() };

    writeFile(user);

    res.status(201).json({ message: "User registered successfully!", user });
}

module.exports = { register };