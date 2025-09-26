// 2) შექმენით ერთი class - ი სახელად Person რომლის constructor - საც გადაეცემა პარამეტრი name, მასში უნდა გქონდეთ ერთი მეთოდი 
// სახელად greet რომელიც მიესალმება მომხმარებელს, შექმენით sub-class - ი სახელად student რომელიც მემკვიდრეობით იღებს სახელს 
// Person class - იდან student - ის constructor - ს უნდა ქონდეს დამატებით ერთი კუთვნილება სახელად grade, მასში შექმენით ერთი 
// მეთოდი სახელად study - ი რომელსაც გამოაქვს მნიშვნელობა `${name} is studying and ${name}'s grade is ${grade}`, student - class - ის constructor - ში 
// გამოყენეთ super ფუნქცია

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
};

class Student extends Person {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }

    study() {
        console.log(`${thiis.name} is studying and ${this.name}'s grade is ${this.grade}`);
    }
};

