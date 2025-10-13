// 3) შექმენით ერთი მასივი შეინახეთ მასში ხილის სახეობები მაგალითად [apple, cherry, strawberry, apple, orange], თქვენი დავალებაა გადაუაროთ 
// მოცემულ სიას და დაითვალოთ თუ რამდენჯერ გხვდებათ (მაგალითად: 'Apple') ხოლი სიაში

const fruits = ["apple", "cherry", "strawberry", "apple", "orange"];

let sum = 0;

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "apple") {
        sum++;
    };
};

console.log(sum);


