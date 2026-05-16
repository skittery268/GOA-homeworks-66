// 8) შექმენით მასივი, მასში შეინახეთ სიტყვები, თქვენი დავალებაა, რომ map method - ის გამოყენებით თითოეულ სიტყვას ბოლოში დაუმატოთ '!'

const words = ["Hello", "World", "my", "name", "is", "Saba"];

const newWords = words.map(word => word + "!");

console.log(newWords);