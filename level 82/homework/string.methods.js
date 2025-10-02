// 2) შექმენით ფაილი სახელად string.methods.js ამ ფაილში უნდა გქონდეთ ფუნქციები capitalize რომელიც სიტყვის პირველ ასოს გადააქცევს დიდ 
// ასოდ, reverse რომელიც გადმოცემულ სიტყვას შემოაბრუნებს, toUpper რომელიც სიტყვის ყველა სიმბოლოს გადააქცევს დიდ ასოდ, toLower 
// რომელიც სიტყვის ყველა სიმბოლოს გადააქცევს პატარა ასოდ, ეს ფუნქციები დაა - export - ეთ გაიტანეთ ფაილიდან დააიმპორთეთ მთავარ ფაილში და გატესტეთ

class strFunctions {
    static capitalize(str) {
        const firstLetter = str[0].toUpperCase();
        const strBody = str.slice(1).toLowerCase();
        return firstLetter + strBody;
    }

    static reverse(str) {
        let newStr = "";
        for (let i = str.length - 1; i >= 0; i--) {
            newStr += str[i]
        }
        return newStr;
    }

    static toUpper(str) {
        return str.toUpperCase();
    }

    static toLower(str) {
        return str.toLowerCase();
    }
};

module.exports = strFunctions;

