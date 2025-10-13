// 19) შექმენით რაიმე ობიექტი, for in - ის გამოყენებით დაბეჭდეთ კუთვნილებები, და მნიშვნელობები

const obj = {
    name1: "Saba",
    age1: 16,
    name2: "Giorgi",
    age2: 18
};

for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
};

