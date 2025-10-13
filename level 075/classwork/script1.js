// 1) შექმენით ფუნქცია რომელიც დააბრუნებს დაპირებას execution ფუნქციაში resolve გამოიძახეთ 5 წამის შემდეგ და გადაეცით რაიმე სტრინგი, 
// შემდეგ გამოიძახეთ შექმენილი ფუნქცია და გამოიყენეთ then მეთოდი რომ წარმატებით დასრულების შემდეგ დაბრუნებული მნიშვნელობა დაბეჭდოთ კონსოლში

function createPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello")
        }, 5000);
    });
};

const prom = createPromise();

prom.then((value) => console.log(value));

