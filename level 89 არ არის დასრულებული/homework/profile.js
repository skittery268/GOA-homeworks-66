// Buttons
const loginButton = document.getElementById("login-button");
const registerButton = document.getElementById("register-button");
const exitButton = document.getElementById("exit-button");
const gameButton = document.getElementById("game-button");

// Sections
const registerDiv = document.getElementById("register");
const authorDiv = document.getElementById("authorization");
const profileDiv = document.getElementById("profile");

// forms
const regForm = document.getElementById("register-form");
const authForm = document.getElementById("authorization-form");

// Global scope variables
let thisAccount = {};

registerButton.addEventListener('click', () => {
    registerDiv.style.display = "flex";
    authorDiv.style.display = "none";
    profileDiv.style.display = "none";
})

loginButton.addEventListener('click', () => {
    registerDiv.style.display = "none";
    authorDiv.style.display = "flex";
    profileDiv.style.display = "none";
})

exitButton.addEventListener('click', () => {
    thisAccount = {};
    authorDiv.style.display = "none";
    registerDiv.style.display = "none";
    profileDiv.style.display = "none";
    exitButton.style.display = "none";
    gameButton.style.display = "none";
    loginButton.style.display = "flex";
    registerButton.style.display = "flex";
})

const renderProfile = (obj) => {
    profileDiv.innerHTML = `
        <div class="account">
            <div class="left">
                <div class="image"></div>
                <h2 id="user-name">${obj.name} <span id="user-email">${obj.email}</span></h2>
            </div>
            <h3 id="status">Member</h3>
        </div>
        <div class="edit-profile">
            <div class="edit-user">
                <h3>User name: ${obj.name}</h3>
                <button>Edit</button>
            </div>

            <div class="edit-user">
                <h3>User email: ${obj.email}</h3>
                <button>Edit</button>
            </div>

            <div class="edit-user">
                <h3>User password: ${obj.password}</h3>
                <button>Edit</button>
            </div>
        </div>
    `
}

if (localStorage.getItem("accounts") === null) {
    const accounts = []
    localStorage.setItem("accounts", JSON.stringify(accounts));
}

class Account {
    constructor(name, email, password, balance, passiveIncome) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.balance = balance;
        this.passiveIncome = passiveIncome;
    }
}

const addFromLocalStorage = (array) => {
    return localStorage.setItem("accounts", JSON.stringify(array));
};

const getFromLocalStorage = (element) => {
    return JSON.parse(localStorage.getItem(element));
}

regForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = regForm.userName.value;
    const email = regForm.userEmail.value;
    const password = regForm.userPassword.value;

    let accounts = getFromLocalStorage("accounts");

    let ind = false;

    if (accounts.length > 0) {
        for (let i = 0; i < accounts.length; i++) {
            if (accounts[i].email != email) {
                ind = true;
            } else {
                ind = false;
                break;
            }
        }

        if (ind) {
            const newAccount = new Account(name, email, password, 0, 0);

            accounts.push(newAccount);

            addFromLocalStorage(accounts);
            loginButton.style.display = "none";
            registerButton.style.display = "none";
            authorDiv.style.display = "none";
            registerDiv.style.display = "none";
            profileDiv.style.display = "flex";
            exitButton.style.display = "flex";
            gameButton.style.display = "flex";
            renderProfile(newAccount);
            regForm.reset();
        } else {
            alert("An account with this email already exists.");
        }
    } else {
        const newAccount = new Account(name, email, password, 0, 0);

        accounts.push(newAccount);

        addFromLocalStorage(accounts);

        loginButton.style.display = "none";
        registerButton.style.display = "none";
        authorDiv.style.display = "none";
        registerDiv.style.display = "none";
        profileDiv.style.display = "flex";
        exitButton.style.display = "flex";
        gameButton.style.display = "flex";
        renderProfile(newAccount);
        regForm.reset();
    }
    
})

authForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = authForm.userEmail.value;
    const password = authForm.userPassword.value;

    const accounts = getFromLocalStorage("accounts");

    const account = accounts.find(obj => obj.password === password && obj.email === email);

    if (account) {
        loginButton.style.display = "none";
        registerButton.style.display = "none";
        authorDiv.style.display = "none";
        registerDiv.style.display = "none";
        profileDiv.style.display = "flex";
        exitButton.style.display = "flex";
        gameButton.style.display = "flex";
        renderProfile(account);
        authForm.reset();
    } else {
        alert("You entered an incorrect password or email.")
    }
})