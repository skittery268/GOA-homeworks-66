// 4) შექმენით ერთი Promise - ი მას უნდა გადაეცეს ორი ფუნქცია resolve, reject, შექმენით ერთი ცვლადი სახელად orderReady რომელიც 
// ინახავს boolean მნიშვნელობას ან true - ს ან false, თუ შექმნილ ცვლადში არსებული მნიშვნელობა true - ა მაშინ გამოიძახეთ resolve 
// ფუნქცია და დააბრუნეთ 'Your order is ready' სხვა შემთხვევაში კი 'Your order got declined'

const myPromise = new Promise((resolve, reject) => {
    const orderReady = true;

    if (orderReady) {
        resolve('Your order is ready');
    } else {
        reject('Your order got declined');
    };
});

console.log(myPromise);

