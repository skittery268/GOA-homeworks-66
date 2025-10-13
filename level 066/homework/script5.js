// 6) შექმენით რიცხვების მასივი, თქვენი დავალებაა რომ დააბრუნოთ true Boolean მნიშვნელობა იმ შემთხვევაში თუ რიცხვი არის ლუწი სხვა შემთხვევაში კი false, ეს გააკეთეთ map მეთოდის გამოყენებით

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const bool = numbers.map(number => number % 2 === 0 ? true : false);

console.log(numbers);
console.log(bool);

