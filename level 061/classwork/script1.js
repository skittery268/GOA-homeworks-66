// 1) 1) შექმენით ღილაკი, რომლის დაკლკიკების შემთხვევაში რიგრიგობით გამოჩნდება 2 prompt ორივეში მომხმარებელმა უნდა შეიტანოს რიცხვები, პირველრიოგში შეკრიბეთ ეს რიცხვები და შეინახეთ ცვლადში, შემდეგ შეამოწმეთ ორივე რიცხვი ლუწია თუ კენტი, საბოლოოდ ყოველ გაშვებაზე უნდა გამოცნდეს მხოლოდ 3 პარაგრაფი, პირველი რიცვხების ჯამი და დანარჩენი ორ პარაგრაფში იქნება ჩასმული შემოტანილი რიცხვი დეფისი და ლუწია/კენტია

// მაგ

// 5 10

// sum = 15
// 5 - odd
// 10 - even

const btn = document.getElementById("btn");
const div = document.getElementById("numbers");

btn.addEventListener('click', function() {
    const num1 = parseInt(prompt("Please enter your number: "));
    const num2 = parseInt(prompt("Please enter your number: "));

    const sum = num1 + num2;

    div.innerHTML += `<p>${num1} + ${num2} = ${sum}</p>`;

    if (num1 % 2 === 0 && num2 % 2 === 0) {
        div.innerHTML += `<p>${num1} - even</p>`;
        div.innerHTML += `<p>${num2} - even</p>`;
    } else if (num1 % 2 === 0 && num2 % 2 !== 0) {
        div.innerHTML += `<p>${num1} - even</p>`;
        div.innerHTML += `<p>${num2} - odd</p>`;
    } else if (num1 % 2 !== 0 && num2 % 2 === 0) {
        div.innerHTML += `<p>${num1} - odd</p>`;
        div.innerHTML += `<p>${num2} - even</p>`;
    } else {
        div.innerHTML += `<p>${num1} - odd</p>`;
        div.innerHTML += `<p>${num2} - odd</p>`;
    }
});

