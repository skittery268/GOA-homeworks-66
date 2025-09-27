const addCarButton = document.getElementById("btn1");
const removeCarButton = document.getElementById("btn2");
const container = document.getElementById("container");
const addForm = document.getElementById("add");
const removeForm = document.getElementById("remove");
const addFormInputs = document.querySelector("#add");
const removeFormInputs = document.querySelector("#remove");
const table = document.getElementById("table-body");

addCarButton.addEventListener('click', () => {
    container.style.display = "none";
    addForm.style.display = "flex";
});

removeCarButton.addEventListener('click', () => {
    container.style.display = "none";
    removeForm.style.display = "flex";
});

class Car {
    constructor(number, make, model, year) {
        this.number = number;
        this.make = make;
        this.model = model;
        this.year = year;
    }

    static getCarsFromStorage() {
        return JSON.parse(localStorage.getItem("cars")) || [];
    }

    static addCarToStorage(car) {
        const cars = Car.getCarsFromStorage();
        cars.push(car);
        localStorage.setItem("cars", JSON.stringify(cars));
    }

    static saveCars(cars) {
        localStorage.setItem("cars", JSON.stringify(cars));
    }
}

// 🔹 Функция для рендера таблицы
function renderTable() {
    const cars = Car.getCarsFromStorage();
    table.innerHTML = "";
    cars.forEach(car => {
        table.innerHTML += `
            <tr>
                <td>${car.number}</td>
                <td>${car.make}</td>
                <td>${car.model}</td>
                <td>${car.year}</td>
            </tr>
        `;
    });
}

// При загрузке страницы — сразу показываем все машины
window.addEventListener("DOMContentLoaded", renderTable);

addFormInputs.addEventListener('submit', (e) => {
    e.preventDefault();

    const make = addFormInputs.make.value.trim();
    const model = addFormInputs.model.value.trim();
    const year = addFormInputs.year.value.trim();

    let cars = Car.getCarsFromStorage();
    const number = cars.length + 1; // уникальный id по счёту

    const newCar = new Car(number, make, model, year);
    Car.addCarToStorage(newCar);

    renderTable();

    addFormInputs.reset();
    container.style.display = "flex";
    addForm.style.display = "none";
});

removeFormInputs.addEventListener('submit', (e) => {
    e.preventDefault();

    const number = removeFormInputs.number.value;

    let cars = Car.getCarsFromStorage();

    // удаляем по номеру
    cars = cars.filter(obj => obj.number != number);

    // перенумерация
    cars.forEach((car, i) => car.number = i + 1);

    Car.saveCars(cars);

    renderTable();

    removeFormInputs.reset();
    container.style.display = "flex";
    removeForm.style.display = "none";
});

