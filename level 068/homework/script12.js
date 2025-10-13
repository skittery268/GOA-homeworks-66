// 12) უნდა გქონდეთ ობიექტი რომელიც ინახავს მომხმარებლებს, თითოეულ მომხმარებელს უნდა ქონდეს isActive კუთვნილება რომლიც მნიშვნელობა არის ან true ან false  - ი. filter - ით დააბრუნეთ ახალი მასივი მხოლოდ იმ მომხმარებლებით რომლის isActive მნიშვნელობა იყო true - ს ტოლი

const users = [
    {
        firstname: "Saba",
        isactive: true
    },
    {
        firstname: "Giorgi",
        isactive: false
    },
    {
        firstname: "Nika",
        isactive: true
    }
];

const activeUsers = users.filter(user => user.isactive)

console.log(activeUsers)

