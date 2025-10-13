// 6) მომხმარებელს შემოატანინეთ რიცხვი, შეამოწმეთ არის თუ არა ის მარტივი

const userInput = parseInt(prompt("შეიყვანეთ რაიმე რიცხვი"));

let ind = true;

if (userInput <= 1) {
    console.log("რიცხვი არ არის მარტივი");
    ind = false;
} else {
    for (let i = 2; i <= Math.sqrt(userInput); i++) {
        if (userInput % i === 0) {
            console.log("რიცხვი არ არის მარტივი");
            ind = false;
            break;
        };
    };
} 

if (ind) {
    console.log("რიცხვი მარტივია");
};

