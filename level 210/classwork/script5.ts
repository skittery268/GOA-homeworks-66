// 5) შექმენით რთული ობიექტის 2 ინტერფეისი და გამოიყენეთ მასზე union

interface Person {
    id: string | number;
    name: string;
    email: string;
    password: string;
    role: string;
};

interface User extends Person {
    canBuyProducts: boolean;
    canAddWhishList: boolean;
};

interface Admin extends Person {
    canDeleteProducts: boolean;
    canDeleteUsers: boolean;
    canBanUsers: boolean;
    canWarnUsers: boolean;
};

const platformUser1: Admin | User = {
    id: "abc123",
    name: "Saba",
    email: "example@gmail.com",
    password: "1234",
    role: "user",
    canBuyProducts: true,
    canAddWhishList: true
};

const platformUser2: Admin | User = {
    id: "abc123",
    name: "Saba",
    email: "example@gmail.com",
    password: "1234",
    role: "user",
    canDeleteProducts: true,
    canDeleteUsers: true,
    canBanUsers: false,
    canWarnUsers: true
};