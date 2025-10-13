// 2) პირველრიგში ახსენით კომენტარებით რა არის document, საიდან იქმნება ეს ობიექტი და რაში გამოიყენება

// შექმენით html ში პარაგრაფი, აირჩიეთ ეგ პარაგრაფი documentობიექტის გამოყენებიტ და შეინახეთ const ში, შემდეგ შეცვლაეთ მისი textContent, უკანა ფერი, id და class


// document - ი არის ობიექტი სადაც ინახება html - ის კოდი და ასევე dom - ის დახმარებით ჩვენ შეგვიძლია ვაკონტროლოთ ნებისმიერი html - ის ელემენტი.

const p = document.getElementById("paragraph");

p.textContent = "Change text content";
p.style.backgroundColor = "red";
p.className = "p";
p.id = "paragraph2";

