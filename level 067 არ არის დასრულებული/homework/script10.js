// 12) შექმენით მასივი რომელიც შედგება სიტყვებიგან, თქვნი დავალებაა რომ filter მეთოდის გამოყენებით გამოიტანოთ მხოლოდ ისეთი სიტყვები რომლებიც მთავრდება 'y' ასოზე

const words = ["happy", "hello", "world", "city", "my", "name", "is", 'Saba'];

const newWords = words.filter(word => word[word.length - 1] === "y");

console.log(newWords);
