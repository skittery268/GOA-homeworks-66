// 7) მომხმარებელს შემოატანინეთ რაიმე string - ი შეამოწმეთ არის თუ არა ის palindrome (palindrome - არის ისეთი სიტყვა რომელიც იკითხება იგივენაირად როგორც მისი შემობრუნებული ვერსია მაგალითად 'anna' - სიტყვა არის palindrome) 

const userInput = prompt("შეიყვანეთ რაიმე სიტყვა");

let word = "";

for (let i = userInput.length - 1; i >= 0; i--) {
    word += userInput[i];
};

if (userInput === word) {
    console.log("თქვენი სიტყვა არის პალინდრომი");
} else {
    console.log("თქვენი სიტყვა არ არის პალინდრომი");
};

