// 5) შექმენით ფუნქცია სახელად sumNumbers რომელსაც გადაეცემა რიცხვების მასივი, for ციკლის გამოყენებიტ შეკრიბეთ ყველა რიცხვი და დააბრუნეთ ფუნქციიდან ჯამი

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numberList);

const sumNumbers = function(numbers) {
    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    };

    return sum
};

console.log(sumNumbers(numberList));

