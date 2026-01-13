const fs = require("fs")

const path = require("path");

const URL = path.join(__dirname, "../database/users.json");

const readFile = () => {
    return JSON.parse(fs.readFileSync(URL, "utf-8"));
}

const writeFile = (data) => {
    const users = readFile();
    users.push(data);
    fs.writeFileSync(URL, JSON.stringify(users));
}

module.exports = { readFile, writeFile };