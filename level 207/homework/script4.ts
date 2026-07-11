// 5) შექმენით Generic Type სახელად ApiResponse<T>, რომელსაც ექნება ორი 
// ველი: success (boolean) და data (ტიპი T). შემდეგ შექმენით სამი 
// განსხვავებული ობიექტი: ერთი, სადაც data არის string, მეორე, სადაც 
// data არის number, ხოლო მესამე, სადაც data არის boolean. დაბეჭდეთ 
// სამივე ობიექტი.

type ApiResponse<T> = {
    success: boolean;
    data: T
};

const user1: ApiResponse<string> = {
    success: true,
    data: "Test"
};

const user2: ApiResponse<number> = {
    success: false,
    data: 1234
};

const user3: ApiResponse<boolean> = {
    success: true,
    data: false
};

console.log(user1);
console.log(user2);
console.log(user3);

