// 6) შექმენით type Car (brand, model, year, price, electric), შექმენით მინიმუმ 8 ავტომობილის მასივი და 
// for ციკლის გამოყენებით დაბეჭდეთ მხოლოდ ელექტრო მანქანები, იპოვეთ ყველაზე ძველი მანქანა, გამოთვალეთ 
// ყველა მანქანის საშუალო ფასი და დაბეჭდეთ მხოლოდ ის მანქანები, რომელთა ფასი 30000-ზე მეტია.

type Car = {
    brand: string;
    model: string;
    year: number;
    price: number;
    electric: boolean;
};

const cars: Car[] = [
    {
        brand: "Toyota",
        model: "Corolla",
        year: 2022,
        price: 24000,
        electric: false
    },
    {
        brand: "Tesla",
        model: "Model 3",
        year: 2024,
        price: 43000,
        electric: true
    },
    {
        brand: "BMW",
        model: "X5",
        year: 2021,
        price: 62000,
        electric: false
    },
    {
        brand: "Mercedes-Benz",
        model: "EQE",
        year: 2023,
        price: 78000,
        electric: true
    },
    {
        brand: "Audi",
        model: "A6",
        year: 2020,
        price: 48000,
        electric: false
    },
    {
        brand: "Hyundai",
        model: "Ioniq 5",
        year: 2024,
        price: 52000,
        electric: true
    },
    {
        brand: "Ford",
        model: "Mustang",
        year: 2022,
        price: 57000,
        electric: false
    },
    {
        brand: "Nissan",
        model: "Leaf",
        year: 2023,
        price: 31000,
        electric: true
    }
];

let oldYear: number = 0;
let averageCarPrice: number = cars.reduce((acc, cur) => acc + cur.price, 0) / cars.length;

for (let i: number = 0; i < cars.length; i++) {
    if (cars[i].electric) {
        console.log(cars[i]);
    };

    if (cars[i].year < oldYear) {
        oldYear = cars[i].year;
    };

    if (cars[i].price > 30000) {
        console.log(cars[i]);
    };
};

console.log(averageCarPrice);
console.log(oldYear);