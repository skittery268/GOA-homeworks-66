// 36) reduce მეთოდის გამოყენების გარეშე, დააბრუნეთ მასივში ასრებული რიცხვების საბოლოო ჯამი, უნდა შექმნათ ფუნქცია

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = (array) => {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
};

console.log(sum(numbers))

