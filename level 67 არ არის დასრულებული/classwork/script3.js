// 3) გამოიყენეთ reduce მეთოდი და განიხილეთ 3 სხვადასხვა მაგალითი (ერთი აუცილებლად უნდა იყოს სტრინგების შეერთებაზე)

const numbers = [4, 2, 6, 1, 10];

const sum = numbers.reduce((start, numbers) => start + numbers, 0);
console.log(sum);

const difference = numbers.reduce((start, numbers) => start - numbers, 0);
console.log(difference);

const words = ["Hello", "world,", "my", "name", "is", "Saba."];

const reduceWords = words.reduce((start, word) => start + " " + word);
console.log(reduceWords);

