// 15) შექმენით რიცხვების მასივი, თქვენი დავალებაა რომ map მეთოდის დახმარებით გადაუაროთ მას და თითოეულ რიცხვს დაუმატოთ 5 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNumbersArr = numbers.map(number => {
    return number + 5;
});

console.log(numbers);
console.log(newNumbersArr);

