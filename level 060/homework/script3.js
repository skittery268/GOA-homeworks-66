// 3) მოიძიეთ დამატებითი მეთოდები მასივებზე და გააკეთეთ თითოეულზე 3 მაგალითი (მოიძიეთ ინფორმაცია მასივის შემდეგ მეთოდებზე slice, splice, shift, unshift, IndexOf)

// .slice()
const arr1 = [1, 2, 3, 4, 5];

console.log(arr1.slice(1, 4));

console.log(arr1.slice(2));    

console.log(arr1.slice(-2));   

console.log(arr1); 

// .splice()
const arr2 = [1, 2, 3, 4, 5];

arr2.splice(1, 2);
console.log(arr2); 

arr2.splice(1, 0, 10, 20);
console.log(arr2); 

arr2.splice(2, 1, 99);
console.log(arr2); 

// .shift()
const arr3 = [10, 20, 30];

console.log(arr3.shift()); 

console.log(arr3);

// .unshift()
const arr4 = [20, 30];

console.log(arr4.unshift(10)); 

console.log(arr4);

// .indexOf()
const fruits = ["ვაშლი", "ბანანი", "მსხალი", "ბანანი"];

console.log(fruits.indexOf("ბანანი")); 

console.log(fruits.indexOf("ბანანი", 2)); 

console.log(fruits.indexOf("ფორთოხალი"));

