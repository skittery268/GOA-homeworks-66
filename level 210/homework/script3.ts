// 4) შექმენით ერთი User-ის interface-ი, რომელიც იქნება ძალიან დატვირთული, ჰქონდეს შემდეგი 
// კუთვნილებები: id, username, email, password, age, isActive, role, phoneNumber, createdAt 
// და updatedAt. ასევე შექმენით მასში ჩაშენებული (nested) ობიექტები: address, რომელსაც 
// ექნება city, street, houseNumber, country და zipCode; profile, რომელსაც ექნება firstName, 
// lastName, avatar, bio და birthDate; ასევე settings, რომელსაც ექნება theme, language, 
// notifications და privacy.
// შემდგომ ჩაშენებული ობიექტები გადაანაწილეთ სხვადასხვა interface - ებად და საბოლოოდ 
// შექემნით ერთი user - ის ობიექტი და გამოიტანეთ ტერმინალში.

// interface User {
//     id: string | number;
//     userName: string;
//     email: string;
//     password: string;
//     age?: number;
//     isActive: boolean;
//     role: string;
//     phoneNumber: string;
//     createdAt: string;
//     updatedAt: string;
//     address: {
//         city: string;
//         street: string;
//         houseNumber: string | number;
//         country: string;
//         zipCode: number;
//     };
//     profile: {
//         firstName: string;
//         lastName: string;
//         avatar: string;
//         bio: string;
//         birthDate: string;
//     };
//     settings: {
//         theme: string;
//         language: string;
//         notifications: string;
//         privacy: string;
//     };
// };

interface Address {
    city: string;
    street: string;
    houseNumber: string | number;
    country: string;
    zipCode: number;
};

interface Profile {
    firstName: string;
    lastName: string;
    avatar?: string;
    bio: string;
    birthDate: string;
};

interface Settings {
    theme: string;
    language: string;
    notifications: boolean;
    privacy: string;
};

interface User {
    id: string | number;
    userName: string;
    email: string;
    password: string;
    age?: number;
    isActive: boolean;
    role: string;
    phoneNumber: string;
    createdAt: string;
    updatedAt: string;
    address: Address;
    profile: Profile;
    settings: Settings;
};

const user: User = {
    id: "abc123",
    userName: "skittery268",
    email: "example@gmail.com",
    password: "1234",
    age: 16,
    isActive: true,
    role: "Admin",
    phoneNumber: "512054195",
    createdAt: "18.07.2026",
    updatedAt: "18.07.2026",
    address: {
        city: "Test",
        street: "Test",
        houseNumber: 113,
        country: "Test",
        zipCode: 1234
    },
    profile: {
        firstName: "Saba",
        lastName: "Dzidzikashvili",
        bio: "Test",
        birthDate: "05.10.2026"
    },
    settings: {
        theme: "Dark",
        language: "Ge",
        notifications: false,
        privacy: "Test"
    }
};

console.log(user);