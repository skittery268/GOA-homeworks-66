// 3) შექმენით TypeScript პროგრამა, რომელშიც გექნებათ Animal ინტერფეისი (name, sound და 
// optional age კუთვნილება). შექმენით Dog კლასი, რომელიც Animal ინტერფეისს განახორციელებს 
// (implements) და დაამატეთ makeSound() მეთოდი, რომელიც დაბეჭდავს ცხოველის ხმას. შექმენით 
// რამდენიმე ძაღლის ობიექტი, მათ შორის ისეთი, რომელსაც ასაკი არ ექნება მითითებული.

interface Animal {
    name: string;
    sound: string;
    age?: number;
};

class Dog implements Animal {
    name: string;
    sound: string;
    age?: number;

    constructor(name: string, sound: string, age?: number) {
        this.name = name;
        this.sound = sound;
        this.age = age;
    }

    makeSound() {
        console.log(`Dog Sound: ${this.sound}`);
    };
};

const userDog1 = new Dog("Test", "Woof Woof", 3);

const userDog2 = new Dog("Test", "Woof Woof");

const userDoп3 = new Dog("Test", "Woof Woof", 3);

