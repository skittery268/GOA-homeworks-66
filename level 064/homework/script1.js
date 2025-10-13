// 1) შექმენით Rock Paper Scissors პროექტი (შეგიძლიათ მოიძიოთ ინფორმაციაც), გაიაზრეთ კოდი

const div = document.getElementById("parent");

const userChoice = prompt("Please enter your choice (Rock, Paper or Scissors): ");

const compChoiceArr = ['Rock', "Paper", "Scissors"];

const index = Math.floor(Math.random() * 3);

const compChoice = compChoiceArr[index];

if (userChoice.toLowerCase() === "paper" && compChoice === "Rock") {
    div.innerHTML += "---------------------------------------";
    div.innerHTML += `<p>Computer choice: ${compChoice}</p>`;
    div.innerHTML += `<p>Your choice: ${userChoice}</p>`;
    div.innerHTML += '<p style="color: green">YOU WIN</p>';
    div.innerHTML += "---------------------------------------";
} else if (userChoice.toLowerCase() === "paper" && compChoice === "Scissors") {
    div.innerHTML += "---------------------------------------";
    div.innerHTML += `<p>Computer choice: ${compChoice}</p>`;
    div.innerHTML += `<p>Your choice: ${userChoice}</p>`;
    div.innerHTML += '<p style="color: red">YOU LOSE</p>';
    div.innerHTML += "---------------------------------------";
} else if (userChoice.toLowerCase() === "rock" && compChoice === "Scissors") {
    div.innerHTML += "---------------------------------------";
    div.innerHTML += `<p>Computer choice: ${compChoice}</p>`;
    div.innerHTML += `<p>Your choice: ${userChoice}</p>`;
    div.innerHTML += '<p style="color: green">YOU WIN</p>';
    div.innerHTML += "---------------------------------------";
} else if (userChoice.toLowerCase() === "rock" && compChoice === "Paper") {
    div.innerHTML += "---------------------------------------";
    div.innerHTML += `<p>Computer choice: ${compChoice}</p>`;
    div.innerHTML += `<p>Your choice: ${userChoice}</p>`;
    div.innerHTML += '<p style="color: red">YOU LOSE</p>';
    div.innerHTML += "---------------------------------------";
} else if (userChoice.toLowerCase() === "scissors" && compChoice === "Paper") {
    div.innerHTML += "---------------------------------------";
    div.innerHTML += `<p>Computer choice: ${compChoice}</p>`;
    div.innerHTML += `<p>Your choice: ${userChoice}</p>`;
    div.innerHTML += '<p style="color: green">YOU WIN</p>';
    div.innerHTML += "---------------------------------------";
} else if (userChoice.toLowerCase() === "scissors" && compChoice === "Rock") {
    div.innerHTML += "---------------------------------------";
    div.innerHTML += `<p>Computer choice: ${compChoice}</p>`;
    div.innerHTML += `<p>Your choice: ${userChoice}</p>`;
    div.innerHTML += '<p style="color: red">YOU LOSE</p>';
    div.innerHTML += "---------------------------------------";
} else if (userChoice.toLowerCase() === "paper" && compChoice === "Paper") {
    div.innerHTML += "---------------------------------------";
    div.innerHTML += `<p>Computer choice: ${compChoice}</p>`;
    div.innerHTML += `<p>Your choice: ${userChoice}</p>`;
    div.innerHTML += '<p style="color: yellow">DRAW</p>';
    div.innerHTML += "---------------------------------------";
} else if (userChoice.toLowerCase() === "rock" && compChoice === "rock") {
    div.innerHTML += "---------------------------------------";
    div.innerHTML += `<p>Computer choice: ${compChoice}</p>`;
    div.innerHTML += `<p>Your choice: ${userChoice}</p>`;
    div.innerHTML += '<p style="color: yellow">DRAW</p>';
    div.innerHTML += "---------------------------------------";
} else if (userChoice.toLowerCase() === "scissors" && compChoice === "Scissors") {
    div.innerHTML += "---------------------------------------";
    div.innerHTML += `<p>Computer choice: ${compChoice}</p>`;
    div.innerHTML += `<p>Your choice: ${userChoice}</p>`;
    div.innerHTML += '<p style="color: yellow">DRAW</p>';
    div.innerHTML += "---------------------------------------";
} else {
    div.innerHTML += '<p style="color: red">INVALID CHOICE</p>'
}