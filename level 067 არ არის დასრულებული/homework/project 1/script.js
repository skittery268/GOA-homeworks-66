// Элементы
let billInput = document.getElementById("user-cash");
let peopleInput = document.getElementById("people");
let tipButtons = document.querySelectorAll(".btn");
let customTip = document.getElementById("custom-procent");

let tipAmountEl = document.getElementById("h1");
let totalEl = document.getElementById("h2");
let resetBtn = document.querySelector(".result-container button");

let bill = 0;
let tipPercent = 0;
let people = 1;

function calculate() {
    if (people <= 0 || isNaN(people)) {
        peopleInput.classList.add("input-error");
        tipAmountEl.innerHTML = "$0.00";
        totalEl.innerHTML = "$0.00";
        return;
    } else {
        peopleInput.classList.remove("input-error");
    }

    let tipAmount = (bill * tipPercent / 100) / people;
    let total = (bill / people) + tipAmount;

    tipAmountEl.innerHTML = "$" + tipAmount.toFixed(2);
    totalEl.innerHTML = "$" + total.toFixed(2);
}

billInput.addEventListener("input", function() {
    let val = parseFloat(this.value);
    bill = (!isNaN(val) && val >= 0) ? val : 0;
    calculate();
});

peopleInput.addEventListener("input", function() {
    let val = parseInt(this.value);
    people = (!isNaN(val) && val > 0) ? val : 0;
    calculate();
});

tipButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        tipPercent = parseInt(this.dataset.tip);

        tipButtons.forEach(function(b) {
            b.classList.remove("active");
        });
        this.classList.add("active");

        customTip.value = "";
        calculate();
    });
});

customTip.addEventListener("input", function() {
    let val = parseFloat(this.value);
    tipPercent = (!isNaN(val) && val >= 0) ? val : 0;

    tipButtons.forEach(function(b) {
        b.classList.remove("active");
    });

    calculate();
});

resetBtn.addEventListener("click", function() {
    billInput.value = "";
    peopleInput.value = "";
    customTip.value = "";
    bill = 0;
    people = 1;
    tipPercent = 0;

    tipButtons.forEach(function(b) {
        b.classList.remove("active");
    });

    tipAmountEl.innerHTML = "$0.00";
    totalEl.innerHTML = "$0.00";
});