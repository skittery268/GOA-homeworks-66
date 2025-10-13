// 10) 4 დავალება გააკეთეთ switch - ის გამოყენებით

const num1 = parseInt(prompt("შეიყვანეთ რაიმე რიცხვი"));
const num2 = parseInt(prompt("შეიყვანეთ რაიმე რიცხვი"));
const operation = prompt("შეიყვანეთ რაიმე მათემატიკური ოპერატორი (+, -, / ან *)");

switch (operation) {
    case "+":
        console.log(num1 + num2);
        break
    case "-":
        console.log(num1 - num2);
        break
    case "/":
        console.log(num1 / num2);
        break
    case "*":
        console.log(num1 * num2);
        break
    default:
        console.log("Invalid Operator");
        break
};

