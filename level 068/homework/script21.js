// 21) შექმენით ორი ობიექტი, თქვენი დავალებაა რომ ეს ობიექტები აიღოთ და გააერთიანოთ ერთ ობიექტში (მოიძიეთ ინფორმაცია)

const obj1 = {a: 15, b: 16, c: 90};
const obj2 = {name: "Saba", age: 16};

const newObj = Object.assign({}, obj1, obj2)

console.log(newObj);

