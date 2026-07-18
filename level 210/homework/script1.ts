// 2) შექმენით TypeScript პროგრამა, რომელშიც გექნებათ Person ინტერფეისი (name, age) და 
// Student (course, academy) ინტერფეისი, რომელსაც Person ინტერფეისი გააფართოებს (extends). 
// შექმენით ერთი სტუდენტის ობიექტი და დაბეჭდეთ მისი სრული ინფორმაცია.

interface Person {
    name: string;
    age: number;
};

interface Student extends Person {
    academy: string;
    course: string;
};

const student: Student = {
    name: "Saba",
    age: 16,
    academy: "GOA",
    course: "Web Development"
};

console.log(student);