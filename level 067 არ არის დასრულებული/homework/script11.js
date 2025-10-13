// 13) მოიძიეთ ინფორმაცია some, every მეთოდებზ, თითოეულზე გააკეთეთ 5-5 მაგალითი

//.some()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result1 = numbers.some(num => num % 2 === 0);
const result2 = numbers.some(num => num > 2);
const result3 = numbers.some(num => num > 10);
const result4 = numbers.some(num => num % 2 !== 0);
const result5 = numbers.some(num => num < 1);

// .every()
const result6 = numbers.every(num => num % 2 === 0);
const result7 = numbers.every(num => num > 2);
const result8 = numbers.every(num => num > 10);
const result9 = numbers.every(num => num % 2 !== 0);
const result10 = numbers.every(num => num < 1);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log();
console.log(result6);
console.log(result7);
console.log(result8);
console.log(result9);
console.log(result10);

