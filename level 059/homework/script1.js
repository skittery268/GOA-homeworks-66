// 2) შექმენით რამოდენიმე ღილაკი Change Background Color, Change Text Color, Change Font Size, უნდა 
// გქონდეთ ერთი პარაგრაფი - <p>Hello</p> როდესაც მომხმარებელი დააკლიკებს Change Background Color ღილაკს 
// ხელს უნდა შეიცვალოს პარაგრაფის უკანა ფერი, როდესაც მომხმარებელი დააკლიკებს Change Text Color ღილაკს 
// ხელს უნდა შეიcვალოს პარაგრაფის ტექსტის ფერი ხოლო როდესაც მომხმარებელი დააკლიკებს Change Font Size 
// ღილაკს ხელს უნდა შეიცვალოს ამ პარაგრაფის ტექსტის ზომა, დაგჭირდებათ წვდომის მოპოვება თითოეულ ღილაკზე ასევე პარაგრაფზეც

const h1 = document.getElementById("h1");
const backColor = document.getElementById("btn1");
const txtColor = document.getElementById("btn2");
const fntSize = document.getElementById("btn3");

backColor.addEventListener('click', () => {
    h1.style.backgroundColor = "red";
})

txtColor.addEventListener('click', () => {
    h1.style.color = "blue";
})

fntSize.addEventListener('click', () => {
    h1.style.fontSize = "50px";
})

