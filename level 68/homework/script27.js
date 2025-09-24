// 27) შექმენით ობიექტი შეინახეთ მასში რიცხვები მაგალითად {first: 1, second: 2, third: 3...}, თქვენი დავალებაა რომ დააბრუნოთ true 
// boolean მნიშვნელობა თუ ყველა კუთვნილების მნიშვნელობა არის რიცხვი

const obj = {
    first: 1,
    second: 2,
    third: 3
};

const check = Object.values(obj).every(num => typeof(num) === typeof(1));

console.log(check)

