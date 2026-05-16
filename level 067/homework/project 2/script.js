const form = document.getElementById("form");
const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const day = e.target.day.value;
    const month = e.target.month.value;
    const year = e.target.year.value;

    const userDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    let startYears = 0;
    let startMonths = 0;
    let startDays = 0;

    const calculatedYears = currentDate.getFullYear() - userDate.getFullYear();
    const calculatedMonths = currentDate.getMonth() - userDate.getMonth();
    const calculatedDays = currentDate.getDate() - userDate.getDate();

    let duration = 1000;

    let stepTimeYears = Math.abs(Math.floor(duration / calculatedYears));
    let stepTimeMonths = Math.abs(Math.floor(duration / calculatedMonths));
    let stepTimeDays = Math.abs(Math.floor(duration / calculatedDays));

    const timerYears = setInterval(() => {
        startYears++;

        years.innerText = startYears;

        if (startYears >= calculatedYears) {
            clearInterval(timerYears);
        }
    }, stepTimeYears);

    const timerMonths = setInterval(() => {
        startMonths++;

        months.innerText = startMonths;

        if (startMonths >= calculatedMonths) {
            clearInterval(timerMonths);
        }
    }, stepTimeMonths);

    const timerDays = setInterval(() => {
        startDays++;

        days.innerText = startDays;

        if (startDays >= calculatedDays) {
            clearInterval(timerDays);
        }
    }, stepTimeDays);
});