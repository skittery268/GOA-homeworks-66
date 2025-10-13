// 33) დაწერეთ ფუნქცია რომელიც აბრუნებს მასივიდან ყველაზე დიდ რიცხვს

const numbers = [1, 2, 3, 4, 5, 6, 70, 8, 9, 0, 10, 20, 30, 60];

const maxNumber = (array) => {
    let num = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > num) {
            num = array[i];
        };
    };

    return num;
};

console.log(maxNumber(numbers))

