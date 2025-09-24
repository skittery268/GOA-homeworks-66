// 34) შექმენით ფუნქცია რომელიც გადააქცევს მასივში არსებულ თითო string - ის პირველ ასოს დიდ ასოდ

const array = ["hello", "world", "my", "name", "is", "saba"];

const capitalize = (arr) => {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
    };

    return newArr;
};


console.log(capitalize(array))

