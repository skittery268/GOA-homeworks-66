// 6) შექმენით რიცხვების მასივი, reduce method - ის გამოყენებით გამოიტანეთ ამ რიცხვების მასივიდან ყველაზე დიდი რიცხვი

const numbers = [1, 2, 3, 4, 5, 10, 2, 3, 4, 5, 6];

const maxNum = numbers.reduce((start, number) => {
    let num = start;

    if (number > num) {
        num = number;
    }

    return num;
});

console.log(maxNum);

