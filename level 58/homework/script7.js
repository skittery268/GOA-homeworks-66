// 9) შექმენით ორი ღილაკი heads tails ორივეს მიანიჭეთ უნკიალური ID შექმენით ერთი პარაგრაფი და მასაც მიანიჭეთ 
// უნკიალური ID, მოიპოვეთ წვდომა ორივე ღილაკზე, იმ შემთხვევაში თუ მომხმარებელმა დააჭირა ხელი heads 
// ღილაკს მაშინ paragraph element - ის ტექსტის შიგთავსი შეცვალეთ და გახადეთ heads - ი, თუ მომხმარებელმა 
// დააჭირა ხელი tails ღილაკს მაშინ paragraph element - ის ტექსტის შიგთავსი შეცვალეთ და გახადეთ tails - ის ტოლი, 
// მინიშნება გამოიყენეთ document.getElementById, addEventListener, მოუსმინეთ 'click' მოვლენას

const btn1 = document.getElementById("head")
const btn2 = document.getElementById("tail")
const p = document.getElementById("paragraph")

btn1.addEventListener("click", () => {
    p.textContent = "heads"
})

btn2.addEventListener("click", () => {
    p.textContent = "tails"
})

