// 2) შექენით Promise უნდა გადაეცეს ორი ფუნქცია resolve, reject - მასში შექმენით ერთი ცვალდი სადაც შეინახავთ საათს, შეამოწმეთ 
// იმ შემთხვევაში თუ ცვალდში შენახული საათის მნიშვნელობა უდრის ამჟამინდელ საათს გამოიძახეთ resolve ფუნქცია და დააბრუნეთ 
// მნიშვნელობა "Your time matches my current local time" სხვა შემთხვევაში კი გამოიძახეთ reject - ი და გადაეცით მნიშვნელობა 
// "Your time does not match to my current local time" მინიშნება გამოიყენეთ Date ჩაშენებული ობიექტი

const myPromise = new Promise((resolve, reject) => {
    const savedHour = 10;
    const currentHour = new Date().getHours();

    if (savedHour === currentHour) {
        resolve("Your time matches my current local time");
    } else {
        reject("Your time does not match to my current local time");
    }  
});

console.log(myPromise);

