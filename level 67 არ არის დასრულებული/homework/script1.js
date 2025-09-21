// 3) შექმენით რიცხვების მასივი, თქვენი დავალებაა, რომ findIndex method - ის გამოყენებით იპოვოთ ისეთი რიცხვის index - ი რომელიც იყოფა 7 - ზე

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findIndex = numbers.findIndex(number => number % 7 == 0);

console.log(findIndex);

