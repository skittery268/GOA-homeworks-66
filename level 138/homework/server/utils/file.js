const fs = require('fs');

const readFile = (FILE_URL) => {
    return JSON.parse(fs.readFileSync(FILE_URL, 'utf8'));
};

const writeFile = (obj, FILE_URL) => {
    const content = readFile(FILE_URL);
    content.push(obj);
    fs.writeFileSync(FILE_URL, JSON.stringify(content), 'utf8');
};

const deleteContent = (obj, FILE_URL) => {
    const content = readFile(FILE_URL);

    const newContent = content.filter(c => c.id !== obj.id);

    fs.writeFileSync(FILE_URL, JSON.stringify(newContent), "utf8");
}

const updateContent = (obj, newObj, FILE_URL) => {
    const content = readFile(FILE_URL);

    if (newObj.title) obj.title = newObj.title;
    if (newObj.content) obj.content = newObj.content;

    const postIndex = content.findIndex(c => c.id === obj.id);

    content.splice(postIndex, 1, obj);

    fs.writeFileSync(FILE_URL, JSON.stringify(content), "utf8");
}

module.exports = {
    readFile,
    writeFile,
    deleteContent,
    updateContent
}