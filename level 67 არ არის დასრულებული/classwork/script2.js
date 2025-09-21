// 2) შექმენით findIndex მეთოდის კლონი

const findIndex = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return i;
        };
    };
};

console.log(findIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], number => number === 5));

