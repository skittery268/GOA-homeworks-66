const { readFile } = require("./file");
const path = require('path');

const FILE_URL = path.join(__dirname, '../database/users.json');

const authenticate = (req, res, next) => {
    const { userId } = req.body; // Assuming userId is sent in body for simplicity

    if (!userId) {
        return res.status(401).json({ message: "User ID required for authentication" });
    }

    const users = readFile(FILE_URL);
    const user = users.find(u => u.id === Number(userId));

    if (!user) {
        return res.status(401).json({ message: "Invalid user" });
    }

    req.user = user;
    next();
};

module.exports = { authenticate };