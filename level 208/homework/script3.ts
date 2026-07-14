// 4) შექმენით ფუნქცია getMessage(value: string | number), 
// რომელიც თუ მიიღებს სტრინგს, დააბრუნებს "Text: " და 
// მნიშვნელობას, ხოლო თუ მიიღებს რიცხვს, დააბრუნებს 
// "Number: " და მნიშვნელობას. ფუნქციის დაბრუნებული ტიპი 
// TypeScript-მა თავად უნდა განსაზღვროს. გამოიძახეთ ფუნქცია 
// როგორც სტრინგით, ასევე რიცხვით.

const getMessage = (value: string | number) => {
    if (typeof value === "string") {
        return `Text: ${value}`;
    };

    return `Number: ${value}`;
};

console.log(getMessage("Saba"));
console.log(getMessage(16));

