// 5) შექმენით Promise - ი, მასში კი ერთი ცვლადი სადაც შეინახავთ თქვენს ასაკს შეამოწმეთ თუ ასაკი მეტია ან ტოლი 18 - ის 
// გამოიძახეთ resolve ფუნქცია და დააბრუნეთ 'You are adult' სხვა შემთხვევაში კი 'You are not an adult'

const myPromise2 = new Promise((resolve, reject) => {
    const age = 16;

    if (age >= 18) {
        resolve('You are adult');
    } else {
        reject('You are not an adult');
    }
});

console.log(myPromise2);

