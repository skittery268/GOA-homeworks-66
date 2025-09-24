// 3) მომხმარებელს შემოატანინეთ რიცხი შეამოწმეთ არის თუ არა ის დადებითი, უარყოფითი, ნული, ათწილადი, მთელი, გამოიტანეთ შესაბამისი ტექსტები

const userInput = parseInt(prompt("შეიყვანეთ რაიმე რიცხვი"));

if (userInput < 0) {
    console.log("რიცხვი არის უარყოფითი");
} else if (userInput === 0) {
    console.log("რიცხვი 0 - ის ტოლია");
} else if (userInput > 0) {
    console.log("რიცხვი არის დადებითი");
} else if (userInput === parseFloat(userInput)) {
    console.log("რიცხვი არის ათწილადი");
} else if (userInput === parseInt(userInput)) {
    console.log("რიცხვი არის მთელი");
}

