// 23) reverse მეთოდის გარეშე შემოაბრუნეთ რიცხვების მასივი

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let reversedArr = []

for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
};

console.log(reversedArr);

