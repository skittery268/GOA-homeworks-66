// 38) შექმენით ფუნქცია რომელიც პოულობს მასივში ყველაზე დიდი რიცხვის ინდექსს

const numbers = [1, 2, 3, 4, 5, 10, 6, 7, 8, 9];

const biggestNum = (array) => {
    let num = array[0];
    let index = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > num) {
            num = array[i]
            index = i;
        };
    };

    return index;
}

console.log(biggestNum(numbers));

