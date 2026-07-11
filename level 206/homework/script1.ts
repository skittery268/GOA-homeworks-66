// 2) შექმენით Student ტიპი (name, age, isActive), შექმენით მინიმუმ 5 სტუდენტის 
// მასივი და for ციკლის გამოყენებით დაბეჭდეთ ყველა სტუდენტის სახელი, მხოლოდ 
// აქტიური სტუდენტები და დათვალეთ, რამდენი აქტიური სტუდენტია.

type Student = {
    name: string;
    age: number;
    isActive: boolean;
};

const students: Student[] = [
    {
        name: "Alex",
        age: 16,
        isActive: true
    },
    {
        name: "Maria",
        age: 18,
        isActive: false
    },
    {
        name: "David",
        age: 17,
        isActive: true
    },
    {
        name: "Sofia",
        age: 19,
        isActive: true
    },
    {
        name: "Nika",
        age: 15,
        isActive: false
    }
];

let activeStudentCount: number = 0;

for (let i: number = 0; i < students.length; i++) {
    console.log(students[i].name);

    if (students[i].isActive) {
        console.log(students[i]);
        activeStudentCount++;
    };
};

console.log(activeStudentCount);