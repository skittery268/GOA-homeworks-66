// 4) შექმენით Employee ტიპი (id, name, salary, department), შექმენით თანამშრომლების მასივი და 
// for ციკლის გამოყენებით იპოვეთ ყველაზე მაღალი ხელფასი, გამოთვალეთ საშუალო ხელფასი და დაბეჭდეთ 
// მხოლოდ იმ თანამშრომლების სახელები, რომელთა ხელფასი 3000-ზე მეტია.

type Employee = {
    id: string | number;
    name: string;
    salary: number;
    departament: string;
};

const employees: Employee[] = [
    {
        id: 1,
        name: "John Smith",
        salary: 3500,
        departament: "IT"
    },
    {
        id: "EMP-002",
        name: "Alice Johnson",
        salary: 4200,
        departament: "HR"
    },
    {
        id: 3,
        name: "David Brown",
        salary: 5000,
        departament: "Marketing"
    },
    {
        id: "EMP-004",
        name: "Emma Wilson",
        salary: 3900,
        departament: "Finance"
    },
    {
        id: 5,
        name: "Michael Davis",
        salary: 4700,
        departament: "Sales"
    },
    {
        id: "EMP-006",
        name: "Sophia Miller",
        salary: 5500,
        departament: "Development"
    }
];

let salary: number = 0;
const average: number = employees.reduce((acc, cur) => acc + cur.salary, 0) / employees.length;

for (let i: number = 0; i < employees.length; i++) {
    if (employees[i].salary > salary) {
        salary = employees[i].salary;
    };

    if (employees[i].salary > 3000) {
        console.log(employees[i].name);
    };
};

console.log(salary);
console.log(average.toFixed(2));