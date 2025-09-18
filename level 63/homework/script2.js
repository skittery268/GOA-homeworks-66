// 3) შექმენით arrow function მას უნდა გადასცეთ ერთი პარამეტრი რომელიც იქნება მასივი ეს მასივი უნდა შედგებოდეს 3 რიცხვისგან 
// თქვენმა ფუნქციამ უნდა გამოითვალოს ამ მასივში არსებული რიცხვების საშუალო არითმეტიკული

const myFunc = numbers => {
    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    };

    return sum / numbers.length;
}

console.log(myFunc([5, 2, 2]));

