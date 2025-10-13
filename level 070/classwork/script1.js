// 1) შექმენით Class სახელად Person, უნდა გქონდეთ constructor - ი რომელსაც გადაეცემა ოთხი პარამეტრი, name, age, lastname, coutry 
// თქვენი დაველბაა რომ შექმნათ  4 ობიექტი new - ის გამოყენებით

class Person {
    constructor(name, age, lastname, country) {
        this.name = name;
        this.age = age;
        this.lastname = lastname;
        this.country = country;
    };
};

const person1 = new Person("Saba", "Dzidzikashvili", 16, "Georgia");
const person2 = new Person("Nino", "Gvinjilia", 16, "Georgia");
const person3 = new Person("Luka", "Cxvaradze", 20, "Georgia");
const person4 = new Person("Lasha", "Lomidze", 22, "Georgia");

console.log(person1)
console.log(person2)
console.log(person3)
console.log(person4)