// 13) შექმენით ერთი მასივი, მოიძიეთ ინფორმაცია indexOf მეთოდის შესახებ, ამის გამოყენებით წაშალეთ ისეთი მნიშვნელობები რომლებიც მეორდება ბევრჯერ

const numbers = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 1, 2, 4, 5, 7, 8, 5, 4, 3, 9, 9];

let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (newNumbers.indexOf(numbers[i]) === -1) {
        newNumbers.push(numbers[i]);
    };
};

console.log(newNumbers);

