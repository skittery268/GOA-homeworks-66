// 8) შექმენით ერთი ფუნქცია გადაეცით მას ერთი პარამეტრი num, თქვენმა ფუნქციამ უნდა შეამოწმოს არის თუ არა 
// კონკრეტული რიცხვი ლუწი თუ არის დააბრუნეთ რომ რიცხვი არის "Even" ლუწი სხვა შემთხვევაში კი დააბრუნეთ 
// რომ "The Number Is Odd" ეს შემოწმება გააკეთეთ ternary operator - ის გამოყენებით, გამოიძახეთ ფუნქცია 4 ჯერ 
// და გადაეცით მას პარამეტრად სხვადასხვა მნიშვნელობები

function evenOrOdd(num) {
    return num % 2 == 0 ? "This number is Even" : "This number is odd"
}

console.log(evenOrOdd(5))
console.log(evenOrOdd(4))
console.log(evenOrOdd(90))
console.log(evenOrOdd(91))

