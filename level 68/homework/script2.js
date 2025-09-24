// 2) მომხმარებელს შემოატანინეთ რაიმე წელი და განსაზღვრეთ არის თუ არა ის ნაკიანი თუ არის console - ში გამოიტანეთ რომ 'The ${userInput} is leap year' სხვა შემთხვევაში კი 'The ${userInput} is not a leap year'

const userInput = parseInt(prompt("შეიყვანეთ რაიმე წელი"));

const checkLeap = userInput % 4 == 0 && (userInput % 100 != 0 || userInput % 400 == 0) ? `${userInput} არის ნაკიანი წელი` : `${userInput} არ არის ნაკიანი წელი`;

console.log(checkLeap);

