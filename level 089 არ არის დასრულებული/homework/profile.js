// Buttons
const loginButton = document.getElementById("login-button");
const registerButton = document.getElementById("register-button");
const exitButton = document.getElementById("exit-button");
const gameButton = document.getElementById("game-button");
const adminPanelButton = document.getElementById("admin-panel-button");

// Sections
const registerDiv = document.getElementById("register");
const authorDiv = document.getElementById("authorization");
const profileDiv = document.getElementById("profile");

// forms
const regForm = document.getElementById("register-form");
const authForm = document.getElementById("authorization-form");

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
    const thisAccount = getFromLocalStorage("thisAccount");
    thisAccount.account = {};

    let isLoggedIn = localStorage.getItem("isLoggedIn")
    isLoggedIn = false;
    localStorage.setItem("isLoggedIn", isLoggedIn);

    localStorage.setItem("thisAccount", JSON.stringify(thisAccount));
    authorDiv.style.display = "none";
    registerDiv.style.display = "none";
    profileDiv.style.display = "none";
    exitButton.style.display = "none";
    gameButton.style.display = "none";
    adminPanelButton.style.display = "none";
    loginButton.style.display = "flex";
    registerButton.style.display = "flex";
})

const addFromLocalStorage = (array) => {
    return localStorage.setItem("accounts", JSON.stringify(array));
};

const getFromLocalStorage = (element) => {
    return JSON.parse(localStorage.getItem(element));
}

const editInfoFromLocalStorage = (account, editproperty, newInfo) => {
    let accounts = getFromLocalStorage("accounts");
    let thisAccount = accounts.find(acc => acc.id === account.id);
    thisAccount[editproperty] = newInfo;
    const newData = {
        account: thisAccount
    }

    accounts = accounts.filter(obj => obj.id !== thisAccount.id);

    accounts.push(thisAccount);
    addFromLocalStorage(accounts);
    localStorage.setItem("thisAccount", JSON.stringify(newData));
}

const renderProfile = (obj) => {
    profileDiv.innerHTML = `
        <div class="account">
            <div class="left">
                <div class="image"></div>
                <h2 id="user-name">${obj.userName} <span id="user-email">${obj.email}</span></h2>
            </div>
            <h4 id="balance">Balance: ${obj.balance} | </h4>
            <h4>Passive Income: ${obj.passiveIncome}</h4>
            <h3 id="status"> ${obj.status === "Member" ? `<div id="green"></div>` : `<div id="red"></div>`} ${obj.status}</h3>
        </div>
        <div class="edit-profile">
            <div class="edit-user">
                <h3>User name: ${obj.userName}</h3>
                <button id="editName">Edit</button>
            </div>

            <div class="edit-user">
                <h3>User email: ${obj.email}</h3>
                <button id="editEmail">Edit</button>
            </div>

            <div class="edit-user">
                <h3>User password: ${obj.password}</h3>
                <button id="editPassword">Edit</button>
            </div>

            <button id="deleteAccount">Delete Account</button>
        </div>
    `

    const profile = JSON.parse(localStorage.getItem("thisAccount"));

    if (profile.account.status === "Administrator") {
        adminPanelButton.style.display = "flex";
    } else {
        adminPanelButton.style.display = "none";
    }

    const deleteAccount = document.getElementById("deleteAccount");
    const editName = document.getElementById("editName");
    const editEmail = document.getElementById("editEmail");
    const editPass = document.getElementById("editPassword");

    const thisAccount = JSON.parse(localStorage.getItem("thisAccount"));

    deleteAccount.addEventListener('click', () => {
        const thisAccount = getFromLocalStorage("thisAccount");

        let accounts = JSON.parse(localStorage.getItem("accounts"))
        accounts = accounts.filter(obj => obj.email !== thisAccount.account.email);

        thisAccount.account = {};
        
        let isLoggedIn = localStorage.getItem("isLoggedIn")
        isLoggedIn = false;
        localStorage.setItem("isLoggedIn", isLoggedIn);

        localStorage.setItem("accounts", JSON.stringify(accounts));
        localStorage.setItem("thisAccount", JSON.stringify(thisAccount));
        authorDiv.style.display = "none";
        registerDiv.style.display = "none";
        profileDiv.style.display = "none";
        exitButton.style.display = "none";
        gameButton.style.display = "none";
        loginButton.style.display = "flex";
        registerButton.style.display = "flex";
    })

    editName.addEventListener('click', () => {
        const newName = prompt("Please enter new user name.");
        if (newName === null) {
            console.log("Name is empty");
        } else if (newName !== "") {
            editInfoFromLocalStorage(thisAccount.account, "userName", newName);
            const thisAcc = JSON.parse(localStorage.getItem("thisAccount"));
            renderProfile(thisAcc.account);
        } else {
            alert("Please enter correct user name.");
        }
    })

    editEmail.addEventListener('click', () => {
        const newEmail = prompt("Please enter new email.");

        let ind = false;

        for (let i = 0; i < newEmail.length; i++) {
            if (newEmail[i] === "@") {
                ind = true;
                break;
            };
        };

        if (ind) {
            editInfoFromLocalStorage(thisAccount.account, "email", newEmail);
            const thisAcc = JSON.parse(localStorage.getItem("thisAccount"));
            renderProfile(thisAcc.account);
        } else {
            alert("The email must contain the @ sign.")
        }
    })

    editPass.addEventListener('click', () => {
        const newPass = prompt("Please enter new password.");
        if (newPass.length >= 8) {
            editInfoFromLocalStorage(thisAccount.account, "password", newPass);
            const thisAcc = JSON.parse(localStorage.getItem("thisAccount"));
            renderProfile(thisAcc.account);
        } else {
            alert("The password must be at least 8 characters long.");
        }
    })
}

if (localStorage.getItem("accounts") === null) {
    const accounts = []
    localStorage.setItem("accounts", JSON.stringify(accounts));
};

if (localStorage.getItem("thisAccount") === null) {
    const thisAccount = {
        account: {}
    };
    localStorage.setItem("thisAccount", JSON.stringify(thisAccount));
};

if (localStorage.getItem("isLoggedIn") === null) {
    const isLoggedIn = "false";
    localStorage.setItem("isLoggedIn", isLoggedIn);
}

if (localStorage.getItem("lastId") === null) {
    const id = 13213;
    localStorage.setItem("lastId", id);
}

class Account {
    constructor(id, userName, email, password, balance, passiveIncome, status, lemonadeStandCount, techStoreCount, pizzaShopCount, taxiCompanyCount, shoppingMallCount) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.balance = balance;
        this.passiveIncome = passiveIncome;
        this.status = status;
        this.lemonadeStandCount = lemonadeStandCount;
        this.techStoreCount = techStoreCount;
        this.pizzaShopCount = pizzaShopCount;
        this.taxiCompanyCount = taxiCompanyCount;
        this.shoppingMallCount = shoppingMallCount;
    }
}

const profile = getFromLocalStorage("thisAccount");

if (profile.account.status === "Administrator") {
    adminPanelButton.style.display = "flex";
} else {
    adminPanelButton.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    if (getFromLocalStorage("isLoggedIn")) {
        const profile = JSON.parse(localStorage.getItem("thisAccount"));

        if (profile.account.status === "Administrator") {
            adminPanelButton.style.display = "flex";
        } else {
            adminPanelButton.style.display = "none";
        }
        
        loginButton.style.display = "none";
        registerButton.style.display = "none";
        authorDiv.style.display = "none";
        registerDiv.style.display = "none";
        profileDiv.style.display = "flex";
        exitButton.style.display = "flex";
        gameButton.style.display = "flex";
        renderProfile(profile.account);
    }
})

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
            let id = localStorage.getItem("lastId");
            id++;
            const newAccount = new Account(id, name, email, password, 0, 0, "Member", 0, 0, 0, 0, 0);
            localStorage.setItem("lastId", id);

            accounts.push(newAccount);

            const thisAccount = getFromLocalStorage("thisAccount");
            thisAccount.account = newAccount;
            localStorage.setItem("thisAccount", JSON.stringify(thisAccount));

            let isLoggedIn = getFromLocalStorage("isLoggedIn");
            isLoggedIn = true;
            localStorage.setItem("isLoggedIn", isLoggedIn);

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
        let id = localStorage.getItem("lastId");
        id++;
        const newAccount = new Account(id, name, email, password, 0, 0, "Member", 0, 0, 0, 0, 0);
        localStorage.setItem("lastId", id);

        accounts.push(newAccount);

        addFromLocalStorage(accounts);

        const thisAccount = getFromLocalStorage("thisAccount");
        thisAccount.account = newAccount;
        localStorage.setItem("thisAccount", JSON.stringify(thisAccount));

        let isLoggedIn = getFromLocalStorage("isLoggedIn");
        isLoggedIn = true;
        localStorage.setItem("isLoggedIn", isLoggedIn);

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
        const thisAccount = getFromLocalStorage("thisAccount");
        thisAccount.account = account;
        localStorage.setItem("thisAccount", JSON.stringify(thisAccount));

        let isLoggedIn = getFromLocalStorage("isLoggedIn");
        isLoggedIn = true;
        localStorage.setItem("isLoggedIn", isLoggedIn);

        const profile = JSON.parse(localStorage.getItem("thisAccount"));

        if (profile.account.status === "Administrator") {
            adminPanelButton.style.display = "flex";
        } else {
            adminPanelButton.style.display = "none";
        }

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
        alert("You entered an incorrect password or email.");
    }
})

const thisAccount = JSON.parse(localStorage.getItem("thisAccount"));

if (thisAccount.account.passiveIncome > 0) {
    setInterval(() => {
        const thisAccount = JSON.parse(localStorage.getItem("thisAccount"));

        thisAccount.account.balance += thisAccount.account.passiveIncome;

        const balance = document.getElementById("balance");

        balance.textContent = `Balance: ${thisAccount.account.balance} | `

        localStorage.setItem("thisAccount", JSON.stringify(thisAccount));
    }, 1000);
}