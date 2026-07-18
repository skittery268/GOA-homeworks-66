// 2) შექმენით საკუთარი ობიექტის ტიპი, შემდეგ ფუნქცია 
// რომელსაც პარამეტრად ორი საკუთარი ტიპის აგერთიანებას 
// დაუწერთ და გამოიყენეთ in ოპერატორი

type User = {
    id: number | string;
    name: string;
    password: string;
};

type Dog = {
    name: string;
    age: string;
};

const check = (value: User | Dog) => {
    if ("id" in value) {
        return true;
    };

    return false;
};
