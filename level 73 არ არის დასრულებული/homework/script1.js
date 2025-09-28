// 3) შექმენით ერთი Promise - ი მას უნდა გადაეცეს ორი ფუნქცია resolve, reject, თქვენი დავალებაა რომ შექმნათ ერთი ცვალი სადაც შეინახავთ 
// random რიცხვს ერთიდან 10 - ის ჩათვლით, შეამოწმეთ თუ random რიცხვი მეტია 3 - ზე მაშინ გამოიძახეთ resolve - ი და გადაეცით მნიშვნელობა 
// `${randomNum} is more than 3` სხვა შმთხვევაში კი გამოიძახეთ reject - ი და დააბრუნეთ მნიშვნელობა `${randomNum} should be more than 3`

const firstPromise = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 11);

    if (random > 3) {
        resolve(`${random} is more than 3`);
    } else {
        reject(`${random} should be more than 3`);
    };
});

console.log(firstPromise);

