// 2) გამოიყენეთ for in ციკლი როგორც მასივზე ისე ობიექტზე, ახსენით კომენტარებით მისი მუშაობა და დანიშნულება შემდეგ მოიძიეთ ინფორმაცია 
// for of ციკლის შესახებ და გააკეთეთ ერთი მაგალითი მისი გამოყენებისა (ცადეთ ობიექტზეც და მასივზეც) ახსენით for of დანიშნულება და 
// განსხვავება for in სა და for of შორის კომენტარებით


// for in
const person = {
    firsname: "Saba",
    lastname: "Dzidzikashvili",
    age: 15
};

const array = ["Saba", "Dzidzikashvili", 15];

for (const key in person) {
    console.log(person[key]);
};

for (const index in array) {
    console.log(array[index]);
};

// for of

// const peoples = {
//     firstpeople: "Saba",
//     secondpeople: "Giorgi",
//     theardpeople: "Nika"
// };

// for (let name of peoples) {
//     console.log(`Hello ${name}`)
// }

// ობიექტებზე for of - ი არ მუშაობს

const peoples = ["Saba", "Giorgi", "Nika", "Ana"];

for (let name of peoples) {
    console.log(`Hello ${name}`)
};

// for of - ი გამოიყენება იმისთვის, რომ გადაუაროთ რაიმე მასივს და გამოვიტანოთ თითოეული მნიშვნელობა (ანუ for of - ით ჩვენ შეგვიძლია გადაუაროთ მასივის მნიშვნელობებს)

// განსხვავება: for in - ი იღებს მასივების ან ობიექტების გასაღებებს (მასივების შემთხვევაში ინდექსებს), for of - ით კი ჩვენ გადაუვლით მასივის მნიშვნელობებს (ობიექტებზე არ მუშაობს)

