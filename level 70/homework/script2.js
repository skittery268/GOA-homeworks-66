// 2) შექმნილ function constructor - ს დაუმატეთ მეთოდი, getDescription, რომელიც console - ბეჭდავს მანქანის შესახებ ინფორმაციას, 
// Car constructor - ში შეამოწმეთ იმ შემთხვევაში თუ მაქანის წელი 2000 ნაკლებია მაშინ გამოიტანეთ რომ 'This is an old car' სხვა შემთხვევაში 
// კი გამოიტანეთ 'This is a modern car', new - ის გამოყენებით შექმენით 3 განსხვავებული მანქანის ობიექტი

function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

    this.getDescription = function() {
        return `Car info: make: ${this.make}, model: ${this.model}, year: ${this.year} and color: ${this.color}.`
    }

    if (this.year < 2000) {
        console.log('This is an old car');
    } else {
        console.log('This is a modern car')
    };
};

const car1 = new Car("Toyota", "Corolla", 2015, "White");
const car2 = new Car("BMW", "X5", 1998, "Black");
const car3 = new Car("Ford", "Mustang", 2022, "Red");

console.log(car1.getDescription())