const regButton = document.getElementById("reg");
const authButton = document.getElementById("auth");
const regForm = document.getElementById("container-reg");
const authForm = document.getElementById("container-auth");
const regFormInputs = document.querySelector("#form1");
const authFormInputs = document.querySelector("#form2");

let users = [{email: "", name: "", password: ""}];

regButton.addEventListener('click', () => {
    regForm.style.display = "flex";
    authForm.style.display = "none";
});

authButton.addEventListener('click', () => {
    regForm.style.display = "none";
    authForm.style.display = "flex";
})

class User {
    constructor(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    };
};

regFormInputs.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = regFormInputs.email1.value;
    const name = regFormInputs.fullName.value;
    const password = regFormInputs.pass1.value;

    let ind = false;

    users.forEach(obj => {
        if (obj.email === email) {
            ind = true;
            return;
        } else {
            ind = false;
        }
    })

    if (ind) {
        alert('The email already registered')
        console.log(users)
    } else {
        const newUser = new User(email, name, password);

        users.push(newUser);
        alert("you have successfully registered");
        console.log(users)
    }
})

authFormInputs.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = authFormInputs.email2.value;

    let ind2 = false;

    users.forEach(obj => {
        if (obj.email === email) {
            ind2 = true;
        }
    })

    if (ind2) {
        alert('You have logged in successfully');
        console.log(users)
    } else {
        alert('Your login information is incorrect');
        console.log(users)
    };
});

