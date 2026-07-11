// 4) შექმენით type User, რომელსაც ექნება ველები: username (string), 
// email (string) და isAdmin (boolean). შემდეგ შექმენით type 
// LoginFunction, რომელიც აღწერს ფუნქციას, იღებს ორ პარამეტრს (username: 
// string, password: string) და აბრუნებს boolean მნიშვნელობას. შექმენით 
// ამ ტიპის ფუნქცია და დააბრუნეთ true, თუ პაროლის სიგრძე მინიმუმ 8 
// სიმბოლოა, წინააღმდეგ შემთხვევაში false. ბოლოს გამოიძახეთ ფუნქცია 
// რამდენიმე განსხვავებული მონაცემით.

type User = {
    username: string;
    email: string;
    isAdmin: boolean;
};

type LoginFunction = (arg1: string, arg2: string) => boolean;

const isPasswordValid: LoginFunction = (username, password) => password.length >= 8;
