// 1) შექმენით ერთი Class - ი სახელად Animal რომელის constructor - საც გადაეცემა ორი პარამეტრი, პირველი - name, მეორე - age, ამ Class - ს 
// უნდა ქონდეს ერთი მეთოდი სახელად describe რომელიც აბრუნებს მცირე ინფორმაციას animal (ცხოველის) შესახებ, შექმენით ერთი class სახელად 
// Dog რომელიც მემკვიდრეობით Animal class - დან იღებს name, age კუთვნილებებს, Dog - constructor - ს უნდა ქონდეს დამატებით ერთი პარამეტრი 
// energy, გამოიყენეთ super() ფუნქცია იმისათვის რომ გამოიძახოთ მშობელი Animal class - ის constructor - ი, შექმენით setter მეთოდი რომელიც 
// განაახლებს energy - ს იმ შემთხვევაში თუ მისი მნიშვნელობა 50 - ზე მეტია

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `Dog info: ${this.name} ${this.age}`;
    }
}

class Dog extends Animal {
    constructor(name, age, energy) {
        super(name, age);
        this.energy = energy;
    }

    set(newEnergy) {
        if (this.energy > 50) {
            this.energy = newEnergy;
        }
    }
};

