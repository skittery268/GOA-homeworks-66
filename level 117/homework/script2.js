// 3) კარგად გაიაზრეთ fs module - ი, შექმენით ფაილი სადაც შეინახავთ დიდ ინფორმაციას, გამოიყენეთ Readable stream - იმისათვის, რომ დაითვალოთ ფაილში არსებული ხაზების რაოდენობა

const readline = require("readline");
const fs = require("fs");

const myInterface = readline.createInterface({
    input: fs.createReadStream("./level 117/homework/text.txt")
});

let lineCount = 0;

myInterface.on("line", line => {
    lineCount++;
});

setTimeout(() => console.log(lineCount), 1000)