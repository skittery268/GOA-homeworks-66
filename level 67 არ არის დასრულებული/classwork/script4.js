// 4) შექმენიტ reduce მეთოდის კლონი

function reduce(arr, cb, start) {
    let startValue = start;

    for (let i = 0; i < arr.length; i++) {
        startValue = cb(startValue, arr[i]);
    };

    return startValue;
};

console.log(reduce([1, 2, 3, 4, 5], (start, number) => start + number, 0));

