// 4) შექმენით სახელების მასივი, findIndex - ის გამოყენებით იპოვეთ იმ სახელის index - ი რომლის ასოც იწყება 'M' - თი

const names = ["Saba", "Nick", "Max", "Luka"];

const findName = names.findIndex(name => name[0] == "M");

console.log(findName);

