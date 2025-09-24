// 30) შექმენით რიცხვების მასივი, თქვენი დავალებაა რომ დააბრუნოთ მხოლოდ ისეთი (უნიკალური რიცხვები) რომლებიც მასივში გვხვდება მხოლოდ ერთხელ

const numbers = [1, 2, 2, 3, 4, 3, 2, 1, 1, 1, 7, 3, 6, 3, 4, 5, 6, 7, 8];

let newNumbers = [];

for (const i in numbers) {
    if (newNumbers.indexOf(numbers[i]) === -1) {
        newNumbers.push(numbers[i]);
    };
}

console.log(newNumbers)

