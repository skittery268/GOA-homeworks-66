// 1) მასივში დაამატეთ 5 ადამიანის ობიექტი, ხუთივე ობიექტი უნდა იყოს ერთნაირი (იგულისხმება კუთვლელების რაოდენობა და სახელები) 
// ამ ობიექტებში მინიმუმ 5 კუთვნილ;ება უნდა იყოს, სახელი, ასაკი, მეთოდი talk, friends კუთვნილება რომელიც ინახავს მეგობრების სახელებს 
// და ჩაშენებული ობიექტი რომელის სახელიცაა address,თქვენი დავალებაა გადაუაროთ ამ მასივს და გაფილტროთ, მხოლოდ ის ობიექტები უნდა 
// იყოს მოცემული ახალ მასივში რომლის ასაკიც > 18 და მეგობრების რაოდენობა მასივში >= 2, filter მეთოდი არ გამოიყენოთ თქვენივე კლონი შექმენით

const company = [
    {
        firstname: "Saba",
        age: 16,
        talk() {
            console.log("I can talking");
        },
        friends: ["Giorgi", "Nika"],
        adress: {
            city: "Qutaisi",
            street: "Zaodi"
        }
    },

    {
        firstname: "Giorgi",
        age: 17,
        talk() {
            console.log("I can talking");
        },
        friends: ["Saba", "Nika", "Ioane"],
        adress: {
            city: "Qutaisi",
            street: "Zaodi"
        }
    },

    {
        firstname: "Nika",
        age: 21,
        talk() {
            console.log("I can talking");
        },
        friends: ["Giorgi"],
        adress: {
            city: "Qutaisi",
            street: "Zaodi"
        }
    },

    {
        firstname: "Lasha",
        age: 20,
        talk() {
            console.log("I can talking");
        },
        friends: ["Giorgi", "Nika"],
        adress: {
            city: "Qutaisi",
            street: "Zaodi"
        }
    },

    {
        firstname: "Zviadi",
        age: 45,
        talk() {
            console.log("I can talking");
        },
        friends: ["Giorgi", "Nika"],
        adress: {
            city: "Qutaisi",
            street: "Zaodi"
        }
    }
];

const filter = array => {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i].age > 18 && array[i].friends.length >= 2) {
            result.push(array[i]);
        };
    };

    return result;
};

console.log(filter(company));

