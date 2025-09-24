// 5) შექმენით რიცხვების მასივი, თქვენი დავალებაა რომ დაითვალოთ თუ რამდენი ლუწი და კენტი რიცხვები არის მოცემული მასივში

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddCount = 0;
let evenCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++
    };
}


console.log(`მასივში ლუწი რიცხვების რაოდენობა: ${evenCount}, კენტი რიცხვების რაოდენობა: ${oddCount}`);

