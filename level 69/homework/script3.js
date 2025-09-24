// 4) კომენტარების სახით ახსენით თუ რა არის constructor - ი, შექმენით constructor - ი სახელად person, გააკეთეთ ამ person - კონსტრუქტორში 
// ოთხი კუთვნილების ინიციალიზება (name, surname, age, country), შეამოწმეთ იმ შემთხვევაში თუ name - ი შეიცავს 4 სიმბოლოს ან მეტს მაგ 
// შემთხვევაში დაბეჭდეთ მომხმარებლის სახელი, სხვა შემთხვევაში კი გამოუტანეთ რომ 'The person's name should contain at least 4 characters', 
// ასევე შექმენით ერთი მეთოდი aboutThePerson - რომელიც დაბეჭდავს მომხმარებლის ინფორმაციას შემდეგნაირად 'The person's name is ${name}, 
// surname ${surname}, the person's age is ${age} and person lives in ${country}'

function Person(name, surname, age, country) {
    this.name = name.length >= 4 ? name : "The person's name should contain at least 4 characters";
    this.surname = surname;
    this.age = age;
    this.country = country;

    this.aboutThePerson = function() {
        return `The person's name is ${this.name}, surname ${this.surname}, the person's age is ${this.age} and person lives in ${this.country}.`
    };
};

const person1 = new Person("Saba", "Dzidizkashvili", 15, "Tbilisi");

console.log(person1)

