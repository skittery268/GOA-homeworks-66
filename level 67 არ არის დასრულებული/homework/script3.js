// 5) შექმენით რიცხვების მასივი, reduce method - ის გამოყენებით გამოთვალეთ ამ რიცხვების საბოლოო ჯამი

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reduceNumber = numbers.reduce((start, number) => start + number, 0);

console.log(reduceNumber);

