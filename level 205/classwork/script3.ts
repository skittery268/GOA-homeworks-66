// 3) შექმენით სატესტოდ მასივი სადაც გაუწერთ ტიპს და გატესტავთ რა როგორ იმუშავებს მაგალითად 
// push []_ით შეცვლა და ასე შემდეგ

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.push(100);
// numbers.push("Saba"); // Type Error
// numbers.push(true); // Type Error
numbers.push(1000000);

numbers[0] = 10;
// numbers[5] = "Saba"; // Type Error

console.log(numbers);