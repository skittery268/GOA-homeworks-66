// 4) fs მოდულის დახმარებით, შექმენით პროგრამა, სადაც მოხმარებელს შემოაქვს ინფორმაცია თქვენი დავალება ეგ ინფორმაცია თან დაამატოთ ტექსტურ ფაილში

const fs = require('fs');

process.stdin.on("data", (userInput) => {
    fs.appendFile("./level 116/classwork/text.txt", userInput, (err) => {
        if (err) {
            console.log("Error:", err)
            process.exit();
        }

        console.log("ინფორმაცია წარმატებით დაემატა ტექსტურ ფაილში!")
    })
})

