// 3) შექმენით ერთი ზოგადი interface და შემდეგ კონკრეტული interface რომელსაც 
// გააფართოვებთ ზოგადი interface დახმარებით

interface Animal {
    name: string;
    age: number;
};

interface Dog extends Animal {
    voice: string;
};

const userDog: Dog = { name: "Test", age: 3, voice: "Woof Woof" };

