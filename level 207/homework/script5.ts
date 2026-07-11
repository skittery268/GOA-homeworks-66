// 6) შექმენით Generic Function სახელად getLastItem<T>, რომელიც მიიღებს 
// ნებისმიერი ტიპის მასივს და დააბრუნებს მის ბოლო ელემენტს. შემდეგ 
// შექმენით სამი განსხვავებული მასივი: რიცხვების, სტრინგების და boolean 
// მნიშვნელობების. გამოიძახეთ ფუნქცია თითოეულ მასივზე და დაბეჭდეთ 
// დაბრუნებული შედეგები.

function getLastItem<T> (arr: T[]): T {
    return arr[arr.length - 1];
};

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const words: string[] = ["Saba", "Nika", "Giorgi", "Luka", "Lika"];

const booleans: boolean[] = [true, false, true, false, false, true];

console.log(getLastItem<number>(numbers));
console.log(getLastItem<string>(words));
console.log(getLastItem<boolean>(booleans));
