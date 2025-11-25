// 6) მომხმარებელს შემოატანინეთ რაიმე ტექსტი, თქვენი დავალებაა, რომ მოცემული ტექსტი დაამატოთ text.txt - ფაილში, გამოიწვიეთ რაიმე error - მაგალითად არასწორად გადაცით ფაილის სახელი, მოცემული error - ი კი გამიტანეთ console - ში

const fs = require("fs");

process.stdin.on("data", userInput => {
    const data = userInput.toString().trim();

    fs.appendFile("te*xt.txt", data, err => {
        if (err) {
            console.log("Error:", err);
            process.exit();
        }
    })
})