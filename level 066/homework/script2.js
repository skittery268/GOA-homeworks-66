// 3) შექმენით დადებითი და უარყოფითი რიცხვებისგან შემდგარი მასივი, თქვენი დავალებაა რომ გამოიტანოთ მხოლოდ ისეთი რიცხვები რომლებიც დადებითია, filter მეთოდის გამოყენებით

const numbers = [-1, -2, -3, -4, -5, 1, 2, 3, 4, 5, 6];

let newNumbers = numbers.filter(number => number > 0);

console.log(numbers);
console.log(newNumbers);

