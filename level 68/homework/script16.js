// 16) some მეთოდის გამოყენებით შეამოწმეთ არის თუა არა რომელიმე მომხმარებელი რომლის ასაკიც მეტია 18 ზე

const users = [
    {
        user: "Saba",
        age: 16
    },

    {
        user: "Giorgi",
        age: 17
    },

    {
        user: "Lasha",
        age: 22
    },

    {
        user: "Nika",
        age: 30
    }
];

let adult = false;

for (let i = 0; i < users.length; i++) {
    adult = Object.values(users[i]).some(age => age > 18);
}

console.log(adult)

