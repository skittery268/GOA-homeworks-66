// 1) გამოიყენეთ stdin ტერმინალიდან ინფორმაციის შემოსატანად, როგორც მოგეხსენებატ ტერმინალიდან შემოტანილი ინფორმაცია არის ორობით ფორმატში ანუ Buffer ობიექტის სახით, გამოიყენეთ შესაბამისიმეთოდი რომ გარდაქმნათ სტრინგად, თუ მომხმარებელი შემოიტანს რიცხვს გამოუყენეთ Error კლასი რომ გამოიწვიოთ ერრორი throw ოპერატორის გამოყენებით (ერრორი: არ შეიძლება რიცხვის შემოტანა) თუ ის იქნება ჩვეულებრივი სტრინგი ციფრების გარეშე მაშინ დაამატეთ ფაილში სახელად result.txt

const fs = require("fs");

process.stdin.on("data", data => {
    const userInput = data.toString();
    
    for (let i = 0; i < userInput.length; i++) {
        if ("1234567890".includes(userInput[i])) {
            throw new Error("არ შეიძლება რიცხვის შემოტანა");
        }
    }

    fs.appendFile("./level 117/classwork/result.txt", userInput, err => {
        if (err) {
            console.log("Error:", err)
            process.exit();
        }

        console.log("ინფორმაცია წარმატებით ჩაიწერა ფაილში");
    })
})

