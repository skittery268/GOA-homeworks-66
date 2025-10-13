// 14) ზემოთ მოცემულ ყველა მეთოდზე როგორიცაა findIndex, filter, map, reduce method - ები შექმენით მათი manual ფუნქციები

// findIndex
const findIndex = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return i;
        };
    };
};

console.log(findIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], number => number === 5));

// reduce
function reduce(arr, cb, start) {
    let startValue = start;

    for (let i = 0; i < arr.length; i++) {
        startValue = cb(startValue, arr[i]);
    };

    return startValue;
};

console.log(reduce([1, 2, 3, 4, 5], (start, number) => start + number, 0));

// map
const manualMap = (arr, cb) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i]));
    };

    return newArr;
};


console.log(manualMap([1, 2, 3, 4, 5, 6, 7, 8, 9], (number) => number * 100));

// filter
const filter = (arr, cb) => {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            result.push(arr[i]);
        };
    };

    return result;
};

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], number => number % 2 === 0));

