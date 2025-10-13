// 3) შექმენით increaseTheCount პროექტი, გექნებათ:
// ერთი პარაგრაფი რომლის საწყისი მნიშვნელობა იქნება <p>Count: 0</p>, 
// ერთი ღილაკი Increase Count By One რომელიც ყოველ ჯერზე გაზრდის Count პარაგრაფის მნიშვნელობას ერთით


const p = document.getElementById("p");
const count = document.getElementById("btn1");

let sum = 0;

count.addEventListener('click', () => {
    sum++;
    p.textContent = `Count: ${sum}.`;
})

