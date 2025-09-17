// 4) შექმენით ფუნქცია სახელად filter, ფუნქციას ექნება ერთიუ პარამეტრი სახელად numbers, ეს პარამეტრი მიიიღებს რიცხვების მასივს, ფუნქციაში შექმენით თავიდან ერთი ცარიელი მასივი სახელად filteredArr რომელშიც დაამატებთ მხოლოდ იმ რიცხვებს რომლებიც იყოფა 2ზე უნათოდ (ლუწები), გამოიყენეთ  for ციკლი ამისათვის, საბოლოოდ როცა დაამატებთ ყვბელა ლუწ რიცხვს დააბრუნეთ ფუნქციიდან return იტ და დაბეჭდეთ დაბრუნებული მასივი

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers)

const filter = function(numberList) {
    let filteredArr = []

    for(let i = 0; i < numberList.length; i++) {
        if(numberList[i] % 2 === 0) {
            filteredArr.push(numberList[i]);
        };
    };

    return filteredArr
};

console.log(filter(numbers))

