// 2) Requirements:
// Create a base class called Vehicle with the following:

// brand (string)

// year (number)

// Method: startEngine() — logs "The engine of [brand] is starting."

// Create a subclass called Car that inherits from Vehicle:

// Add a new property: doors (number)

// Add a method: honk() — logs "Beep beep!"

// Create a subclass called Motorcycle that also inherits from Vehicle:

// Add a new property: hasSidecar (boolean)

// Add a method: revEngine() — logs "Vrrroooom!"

// Create instances of both Car and Motorcycle, and call their methods to test them.

// (Optional Bonus): Add a method getInfo() in Vehicle that returns a string like:
// "This is a [brand] made in [year]."

class Vehicle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    startEngine() {
        console.log(`The engine of ${this.brand} is starting.`);
    }

    getInfo() {
        return `This is a ${this.brand} made in ${this.year}.`;
    }
}

class Car extends Vehicle {
    constructor(brand, year, doors) {
        super(brand, year);
        this.doors = doors;
    }

    honk() {
        console.log("Beep beep!");
    }
}

class Motorcycle extends Vehicle {
    constructor(brand, year, hasSidecar) {
        super(brand, year);
        this.hasSidecar = hasSidecar;
    }

    revEngine() {
        console.log("Vrrroooom!");
    }
}

const myCar = new Car("Toyota", 2020, 4);
const myMotorcycle = new Motorcycle("Harley-Davidson", 2019, false);

myCar.startEngine();
myCar.honk();
console.log(myCar.getInfo());

myMotorcycle.startEngine();
myMotorcycle.revEngine();
console.log(myMotorcycle.getInfo());

