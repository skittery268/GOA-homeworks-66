// 4) შექმენით ფაილი, შეინახეთ მასში დიდი ინფორმაცია, თქვენი დავალებაა, რომ გათიშოთ პროგრამა მაშინ როდესაც ფაილში არსებული ხაზების რაოდენობა გაუტოლდება 10

const readline = require("readline");
const fs = require("fs");

const myInterface = readline.createInterface({
    input: fs.createReadStream("./level 117/homework/text.txt")
});

let lineCount = 0;

myInterface.on("line", line => {
    lineCount++;
    console.log(line);
    if (lineCount >= 10) {
        process.exit();
    };
})
