// 2) შექმენით კონსტრუქტორი სახელად Car რომელშიც 3 კუთვნილების ინიციალიზებას გააკეთებთ, brand, model და გამოშვების წელი აგრეთვე დაამატეთ 
// მეთოდი introduce რომელიც უბრალოდ დაბეჭდავს მანქანის ბრენდს, მოდელს და გამოშვების თარიღს, კონსტრუქტორს ლოგიკურია უნდა ჰქონდეს 3 
// პოარამეტრი ობიექტის შესაქმნელად, გამოიძახეთ კონსტრუქტორი დსა შექმენიოთ 4 ობიექტი (აუცილებლად ახსენით კომენტარებით რა არის კონსტრუქტორი 
// რა პლიუსები და მინუსები აქვს  მას)

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.introduce = function() {
        return `${this.brand} ${this.model} ${this.year}`
    };
};

const car1 = new Car("Mercedes-Benz", "I8", "2000");
const car2 = new Car("Mercedes-Benz", "I8", "2000");
const car3 = new Car("Mercedes-Benz", "I8", "2000");
const car4 = new Car("Mercedes-Benz", "I8", "2000");

