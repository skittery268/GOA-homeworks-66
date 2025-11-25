// 5) მომხმარებელს შემოატანინეთ ტექსტი, თუ მომხმარებელმა შემოიტანა მნიშვნელობა add Text, მაშინ დაამატეთ სიტყვა text.txt ფაილშ, თუ მომხმარებელმა შემოიტანა მნიშვნელობა show მაშინ გამოიტანეთ text.txt ფაილის შეგთავსი, თუ შემოიტანა მნიშვნელობა clear მაშინ text.txt ფაილში ავტომატურად უნდა წაიშალოს მასში არსებული შიგთავსი, თუ მან შემოიტანა მნიშვნელობა exit მაშინ გათიშეთ თქვენი პროგრამა

const fs = require("fs")

process.stdin.on("data", userInput => {
    const userWord = userInput.toString().trim();
    const userInfo = userInput.toString();
    const userInfoArray = userInfo.split(' ');

    if (userInfoArray[0].toLowerCase() === "add" && userInfoArray[1].toLowerCase() === "text") {
        const newArr = userInfoArray.slice(2);
        const userWords = newArr.join(" ");
        fs.appendFile("./level 116/homework/text.txt", userWords, err => {
            if (err) {
                console.log("Error:", err);
                process.exit();
            }
            console.log("text append to text.txt file");
        })
    } else if (userWord === "show") {
        fs.readFile("./level 116/homework/text.txt", (err, data) => {
            if (err) {
                console.log("Error", err)
                process.exit();
            }
            console.log(data.toString());
        })
    } else if (userWord === "clear") {
        fs.writeFile("./level 116/homework/text.txt", "", (err) => {
            if (err) {
                console.log("Error", err)
                process.exit();
            }
            console.log("File cleared");
        })
    } else if (userWord === "exit") {
        console.log("buy!")
        process.exit();
    }
})

