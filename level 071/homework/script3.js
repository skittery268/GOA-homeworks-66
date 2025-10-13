// 3) შექმენით 4 input - ველი სადაც მომხმარებელს შეყავს ინფორმაცია როგორიცაა name, lastname, email, password, თქვენი დავალებაა რომ 
// მოიპოვოთ წვდომა თითოეულ input - ზე და შეინახოთ გადმოცემული ინფორმაცია localStorage - ში ლოკალურ ბაზაში (მოიძიეთ ინფორმაცია)

const form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.username.value;
    const lastName = form.lastname.value;
    const email = form.email.value;
    const pass = form.password.value;

    const user = {name, lastName, email, pass};
    
    localStorage.setItem("user", JSON.stringify(user));
})

