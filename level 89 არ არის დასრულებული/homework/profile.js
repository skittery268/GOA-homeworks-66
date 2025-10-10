// Buttons
const loginButton = document.getElementById("login-button");
const registerButton = document.getElementById("register-button");

// Sections
const registerDiv = document.getElementById("register");
const authorDiv = document.getElementById("authorization");
const profileDiv = document.getElementById("profile");

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