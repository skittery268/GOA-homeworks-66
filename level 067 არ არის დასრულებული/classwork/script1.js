// 1) გამოიყენეთ findIndex მეთოდი და თქვენი სურვილით გააკეთეთ 2-3 მაგალითი (ახსენიტ კომენტარებით რაში შეიძლება გამოვიყენოთ findIndex)

const names = ["Saba", "Ia", "Nino", "Luka", "Giorgi", "Nika"];

const nameIndex1 = names.findIndex(name => name === "Luka");
console.log(nameIndex1);

const nameIndex2 = names.findIndex(name => name === "Nino");
console.log(nameIndex2);

// findIndex - ი გამოიყენება იმისთვის, რომ ვიპოვოთ რაიმე ელემენტის ინდექსი მასივში კონკრეტული კრიტერიიდან გამომდინარე.

