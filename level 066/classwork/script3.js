// 3) შექმენით ერთი მასივი შეინახეთ მაში random რიცხვები, თქვენი დავალებაა filter method - ის გამოყენებით მასივიდან გაფილტროთ მხოლოდ ისეთი რიცხვები რომლებიც არის ლუწი

const random = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = random.filter(num => num % 2 == 0);

console.log(random);
console.log(evenNumbers);