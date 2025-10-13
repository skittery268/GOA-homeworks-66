// 18) შექმენით მომხმარებელების ობიექტი თითოეულს აუცილებლად ნდა ქონდეს age კუთვნილება, reduce მეთოდის გამოყენებითდააჯგუფეთ მომხმარებლები 
// ასაკის მიხედვით, მაგალითად 20-29, 30-39, 10-19, 40-49 და ასე შემდეგ

const users = [
    { name: "Nika", age: 25 },
    { name: "Lika", age: 33 },
    { name: "Giorgi", age: 21 },
    { name: "Mariam", age: 42 },
    { name: "Ana", age: 17 },
    { name: "Dato", age: 38 },
    { name: "Saba", age: 16 },
    { name: "Tamar", age: 48 },
    { name: "Nino", age: 10 }
];

const groupedByAgeRange = users.reduce((acc, user) => {
    const ageGroupStart = Math.floor(user.age / 10) * 10;
    const ageGroupEnd = ageGroupStart + 9;
    const ageRangeKey = `${ageGroupStart}-${ageGroupEnd}`;

    if (!acc[ageRangeKey]) {
        acc[ageRangeKey] = [];
    }

    acc[ageRangeKey].push(user);

    return acc;
}, {});

console.log(groupedByAgeRange);

