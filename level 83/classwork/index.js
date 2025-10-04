// 1) შექმენით ფაილი სახელად index.js, ფაილის შემქენის შემდეგ დააინსტალირეთ тpm ხელსაწყოს გამოყენებიუთ სამართავი ფაილი, სამართავი ფაილის 
// დაინსტალირების შემდეგ გადმოწერეთ package სახელად chalk, გამოიყენეთ და გატესტეთ მინიმუმ 10 სხვადასხვა შემთხვევა დოკუმენტაციის დახმარებით, 
// თქვენ მოგიწევთ import export გამოყენება თანამედროვე გზით ამიტომ package ფაილის დახმარებით უნდა შეცვალოთ ტიპი 
// (კომენტარებით ახსენით რა არის package.json, package-lock.json, node_modules, commonJS, module) აგრეთვე ახსენით კომენტარებით რა არის 
// npm ხელსაწყო და რა პრობლემებს ჭრის ის

import chalk from "chalk";

console.log(chalk.bgBlue("Hello world"));
console.log(chalk.red("Hello world"));
console.log(chalk.white("Hello world"));
console.log(chalk.red.bold("Hello world"));
console.log(chalk.black.italic("Hello world"));
console.log(chalk.red.inverse("Hello world"));
console.log(chalk.yellow.bold("Hello world"));
console.log(chalk.black.bold("Hello world"));
console.log(chalk.red.italic("Hello world"));
console.log(chalk.yellow.bgBlackBright("Hello world"));

// package.json - სამართავი ფაილი.
// package-lock.json - აქ არის მითითებული თუ რომელ მოდულებზე არის დამოკიდებული ჩვენმიერ გადმოწერილი მოდულები.
// node_modules - აქ არის თავმოყრილი ჩვენმიერ გადმოწერილი მოდულები.
// commonJS - ეს არის მოდულების იმპორტის და ექსპორტის ძველი მეთოდი.
// module - ეს არის მოდულების იმპორტის და ექსპორტის ახალი მეთოდი.

// --------------------------------------------------------------------------------------------------------------------------------------------------------

// 2) დააინსტალირეთ qrcode მოდული და შექმენით თქვენი ფბსთის qr-code.png
import fr from "fs";
import qrcode from "qrcode";

const URL = "https://www.facebook.com/saba.dzidzik.ashvili.554227";

qrcode.toFile("qr-code.png", URL, function (err) {
  if (err) throw err;
  console.log(chalk.green("done"));
});

