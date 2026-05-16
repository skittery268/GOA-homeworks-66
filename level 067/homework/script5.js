// 7) შექმენით მასივი, მასში შეინახეთ string - ები, თქვენი დავალებაა რომ reduce method - ის გამოყენებით დააბრუნოთ ამ სიტყვების სომბოლოების რაოდენობა

const words = ["Hello", "World", "my", "name", "is", "Saba"];

const wordLen = words.reduce((word, len) => word + len.length, 0);

console.log(wordLen);

