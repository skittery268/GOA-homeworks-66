// 6) შექმენით: 
// ორი პარაგრაფი
// ორი ღილაკი -- Change Text Content, Add innerHTML
// მოიპოვეთ მათზე წვდომა, როდესაც მომხმარებელი დააკლიკებს პირველ ღილაკს ხელს უნდა მოხდეს text - ის შიგთავსის შეცვლა, 
// ხოლო როდესაც მომხმარებელი დააკლიკებს მეორე ღილაკს ხელს innerHTML - ის გამოყენებით უნდა ჩაამატოთ მეორე ელემენტში 
// დამატებით ელემენტი <p><b>Value</b></p>, <p><strong></strong></p>, <p><i>Italic</i></</p> და ასე შემდეგ, კომენტარების 
// სახით ახსენით თუ რა განსხვავებაა:
// div.innerHTML = `<p></p>`, div.innerHTML += `<p></p>` შორის

const addText = document.getElementById("btn1");
const addHtml = document.getElementById("btn2");
const p = document.getElementById("p");
const div = document.getElementById("div");

addText.addEventListener('click', () => {
    p.textContent = "Hello world!";
})

addHtml.addEventListener('click', () => {
    div.innerHTML += "<p><b>Value</b></p>";
    div.innerHTML += "<p><strong>Hello</strong></p>";
    div.innerHTML += "<p><i>Italic</i></</p>";
})

// div.innerHTML = `<p></p>` - ით ჩვენ წავშლით ყველაფერს დივში და ჩავამატებთ პარაგრაფს
// div.innerHTML += `<p></p>` - ით ჩვენ ჩავამატებთ ახალ პარაგრაფს დივში

