// 7) შეამოწმეთ არსებობს თუ არა ფაილი, ფაილის სახელი არის text1.txt - თუ მოცემული ფაილი არსებობს დაბეჭდეთ File found, თუ არა დაბეჭდეთ File missing ამისათვის გამოიყენეთ existsSync

const fs = require("fs");

if (fs.existsSync("text1.txt")) {
    console.log("File found");
} else {
    console.log("File missing")
}
