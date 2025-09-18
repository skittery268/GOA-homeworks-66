// 2) შექმენით ფუნქცია რომელიც აბრუნებს ფუნქციის მნიშვნელობა, გამოიძახეთ დაბრუნებული ფუნქცია და ნახეთ როგორ იმუშავებს კოდი

const higherOrderFunction = function(greet) {
    return greet();
};

const greet = () => {
    return "Hello world!";
};

console.log(higherOrderFunction(greet));

