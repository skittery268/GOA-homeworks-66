// 5) გამოიყენეთ Writeable Streams - იმისათვის, რომ ფაილში შეინახოთ რიცხები 1 - დან 50 - ის ჩათვლით

const fs = require("fs");

const writeStream = fs.createWriteStream("./level 117/homework/text.txt");

let count = 1;

while (count <= 50) {
    writeStream.write(`${count}\n`);
    count++;
};

writeStream.end();