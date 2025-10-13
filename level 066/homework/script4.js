// 5) შექმენით ერთი მასივი სადაც გექნებათ string - ები, თქვენი დავალებაა რომ გამოიტანოთ მხოლოდ ისეთი 
// string - ები რომლის სიმბოლოების რაოდენობაც უდრის 3 - ს, filter მეთოდის გამოყენებით

const strings = ["Hello", "World", "Ana", "and", "or"];

let newStrings = strings.filter(word => word.length === 3);

console.log(strings);
console.log(newStrings);

