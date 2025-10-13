// 4) მომხმარებელს შემოატანინეთ ორი რიცხვი, და ოპერატორი როგორიცაა + - * /, თუ მომხმარებელმა აირჩია + ნიშანი მაშინ მომხმარებლის მიერ შემოტანილი რიცხვები უნდა შეკრიბოთ და გამოიტანოთ console - ში, მსგავსად გააკეთეთ - * / - ის ნიშნებზე

const num1 = parseInt(prompt("შეიყვანეთ რაიმე რიცხვი"));
const num2 = parseInt(prompt("შეიყვანეთ რაიმე რიცხვი"));
const operation = prompt("შეიყვანეთ რაიმე მათემატიკური ოპერატორი (+, -, / ან *)");

if (operation === "+") {
    console.log(num1 + num2);
} else if (operation === "-") {
    console.log(num1 - num2);
} else if (operation === "/") {
    console.log(num1 / num2);
} else if (operation === "*") {
    console.log(num1 * num2);
} else {
    console.log("Invalid Operation");
};


