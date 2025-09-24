// 20) შექმენით ერთი ობიექტი, მასში დაამატეთ ერთი კუთვნილება, წაშალეთ ერთი კუთვნილება და აგრეთვე შეცვალეთ ერთი კუთვნილების მნიშვნელობაც

const obj = {
    name1: "Saba",
    age1: 15,
    name2: "Giorgi",
    age2: 18
};

delete obj.name2

obj.color = "Black";

obj.age1 = 16;

console.log(obj)

