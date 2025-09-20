// 4) შექმენით მასივი რომლებიც შედგება რამოდენიმე ხილისგან, თქვნი დავალებაა რომ გამოიტანოთ მხოლოდ ისეთი ხილის სახელები 
// რომლის პირველი ასო არის “a”, ეს გააკეთეთ filter მეთოდის გამოყენებით

const fruits = ["Apple", "Orange", "Cherry", "Strawberry"];

let newFruits = fruits.filter(word => word[0] == "A");

console.log(fruits);
console.log(newFruits);

