// 1) გამოიყენეთ 3 მეთოდი ელემენტის/ელემენტების წამოსაღებად gelElementById, getElementsByClassName და getElementsByTagName ახსენით 
// კომენტარებით რა განსხვავებაა მათ შორის და ახსენიტ სხვადასხვა სიტუაციაში რა მნიშვნელობებს დააბრუნებს

// getElementById წამოღებული ელემენტის შიგნით ჩასვით ახალი 3 ელემენტი innerHTML გამოიყენებიოთ, აგრეთვე ახსენით რა განსხვავებაა 
// innerHTMl სა და textContent შორის

const pId = document.getElementById("first");  // ამ მეთოდის დახმარებით ჩვენ შეგვიძლია, რომ მოვიპოვოთ წვდომა ელემენტზე ID - ის მეშვეობით.

const pClass = document.getElementsByClassName("second"); // ამ მეთოდის დახმარებით ჩვენ შეგვიძლია, რომ მოვიპოვოთ წვდომა ელემენტზე class - ის მეშვეპბით.

const allP = document.getElementsByTagName("p"); // ამ მეთოდის დახმარებით ჩვენ შეგვიძლია, რომ მოვიპოვოთ წვდომა ელემენტზე ამ ელემენტის თეგის სახელის მეშვეობით.

pId.innerHTML += "<b> NEW ELEMENT 1,</b> ";
pId.innerHTML += "<i> NEW ELEMENT 2,</i> ";
pId.innerHTML += "<u> NEW ELEMENT 3.</u> ";

// innerHTML - ით ჩვენ შეგვიძლია, რომ შევცვალოთ მთლიანი ელემენტის შემცველობა ან ჩავამატოთ ახალი ინფორმაცია (ელემენტის შიგნით თეგებიც).
// textContent - ით ჩვენ შეგვიძლია, რომ შევცვალოთ მარტო ელემენტის ტექსტი (შიგთავსი).

