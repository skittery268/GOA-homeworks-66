// 1) შექმენით ფაილი სახელად functions.js სადაც თქვენ გექნებათ რაიმე ფუნქციები მაგალითად greetUser, guessNumber etc. 
// ეს ფუნქციები დაა - export - ეთ და გამოიყენეთ თქვენს მთავარ ფაილში
// package.json - ის ფაილში "type" ს მიანიჭეთ შესაბამისი მნიშვნელობა commonJS/module

const { Chance } = require("chance");
const { greetUser, guessNumber } = require("./functions.js");

console.log(greetUser("Saba"));
console.log(guessNumber(5));

// 2) გადმოწერეთ Chance მოდული და გააკეთეთ რამოდენიმე მაგალითი

const chance1 = new Chance();

console.log(chance1.name());
console.log(chance1.age());
console.log(chance1.address());
console.log(chance1.phone());

