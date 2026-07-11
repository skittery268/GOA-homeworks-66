/**
 * This function say hello user with his username and age
 * @param name this is functuion parameter, he get string value
 * @param age this is function parameter, he get number value
 * @returns this function returns string value
 */
const greet = (name: string, age?: number): string => {
    return `Hello, my name is ${name} and i am ${age || 10} old!`;
};

console.log(greet("Saba"));
console.log(greet("Saba", 16));