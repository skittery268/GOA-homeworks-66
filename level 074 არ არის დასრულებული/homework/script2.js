// 3) შექმენით Promise უნდა გადაეცეს ორი ფუნქცია resolve, reject - მასში კი შექმენით ერთი ცვლადი სადაც შეინახავთ რაიმე რიცხვს 
// შეამოწმეთ თუ რიცხვი არის ლუწი გამოიძახეთ resolve - ფუნქცია და გადაეცით მნიშვნელობა "The Number is even" სხვა შემთხვევაში კი "The Number is odd"

const myPromise = new Promise((resolve, reject) => {
    const number = 7;
    if (number % 2 === 0) {
        resolve("The Number is even");
    } else {
        reject("The Number is odd");
    }
});

console.log(myPromise);

