// 3) შექმენით ფუნქცია printId(id: string | number), 
// რომელიც მიიღებს id-ს. თუ id იქნება string, დაბეჭდეთ 
// "String ID: " და მისი მნიშვნელობა, ხოლო თუ number 
// იქნება, დაბეჭდეთ "Number ID: " და მისი მნიშვნელობა. 
// გამოიყენეთ Type Narrowing.

const printId = (id: string | number): void => {
    if (typeof id === "string") {
        console.log(`String ID: ${id}`);
    };

    console.log(`Number ID: ${id}`);
};