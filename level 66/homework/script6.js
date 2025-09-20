// 7) შექმენით რიცხვების მასივი, თქვენი დავალებაა რომ map მეთოდის გამოყენებით გამოიტანოთ თითოეული სიმბოლო string - ში, ამისთვის მოიძიეთ toString() მეთოდი

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers.map(num => num.toString());

console.log(numbers);
console.log(newNumbers);

