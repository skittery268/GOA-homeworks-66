const form = document.getElementsByTagName("form")[0];
const input = document.getElementsByTagName("input")[0];
const p = document.getElementById("error-message");
const container1 = document.getElementById("container");
const container2 = document.getElementById("container2");
const btn = document.getElementById("btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    if (!email) {
        p.style.display = "flex";
        input.style.backgroundColor = "#FFE8E8";
        input.style.borderColor = "#BF7D78";
        input.classList.add("placeholder")
        return;
    }

    e.target.reset();

    container1.style.display = "none";
    container2.style.display = "flex";
})

btn.addEventListener("click", () => {
    container1.style.display = "flex";
    container2.style.display = "none";
})