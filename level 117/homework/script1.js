// 2) შექმენით text.txt ფაილი სადაც შეინახავთ სახელებს, თქვენი დავალებაა, რომ დაბეჭდოთ მხოლოდ იმ ფაილის ხაზები რომელებიც უდრის თქვენს სახელს

const readline = require("readline");
const fs = require("fs");

const myInterface = readline.createInterface({
    input: fs.createReadStream("./level 117/homework/text.txt")
});

myInterface.on("line", line => {
    if (line === "საბა") {
        console.log(line);
    }
})

