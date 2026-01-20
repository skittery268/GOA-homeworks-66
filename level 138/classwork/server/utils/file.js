const fs = require("fs")

const readFile = (URL) => {
    return JSON.parse(fs.readFileSync(URL, "utf-8"));
}

const writeFile = (data, URL) => {
    const users = readFile(URL);
    users.push(data);
    fs.writeFileSync(URL, JSON.stringify(users));
}

module.exports = { readFile, writeFile };