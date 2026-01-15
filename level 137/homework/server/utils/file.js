const fs = require("fs")

const path = require("path");

const URL = path.join(__dirname, "../database/");

const readFile = (file) => {
    const newUrl = URL + file;
    return JSON.parse(fs.readFileSync(newUrl, "utf-8"));
}

const writeFile = (file, data) => {
    const content = readFile(file);
    const newUrl = URL + file;
    content.push(data);
    fs.writeFileSync(newUrl, JSON.stringify(content));
}

const deleteObj = (file, id) => {
    let content = readFile(file);
    const newUrl = URL + file;
    content = content.filter(c => c.id !== id);

    fs.writeFileSync(newUrl, JSON.stringify(content));
}

const updatePostInDB = (data, id) => {
    const posts = readFile("posts.json");
    const newUrl = URL + "posts.json";

    const post = posts.find(p => p.id === id);

    if (data.title) post.title = data.title;
    if (data.content) post.content = data.content;

    fs.writeFileSync(newUrl, JSON.stringify(posts));
}

module.exports = { readFile, writeFile, deleteObj, updatePostInDB };