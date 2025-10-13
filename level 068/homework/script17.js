// 17) შექმენით ერთი მასივი, მასში კი შექმენით რამოდენიმე ობიექტი, some method - ის გამოყენებით შეამოწმეთ არის თუ არა ისეთი ობიექტი 
// რომლის მნიშვნელობაც არ არის განსაზღვრული


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
        user: undefined,
        age: 30
    }
];

let empty = false;

for (let i = 0; i < users.length; i++) {
    empty = Object.values(users[i]).some(obj => obj === undefined);
};

console.log(empty)

