// 4) შექმენით ფუნქცია სახელად manualForEach რომელსაც გადაეცემა arr და cb, ამ ფუნქციის 
// ლოგიკა უნდა იყოს ისეთივე როიგორიც არის forEach (ახსენით რა არის callback ფუნქცია, 
// რას აკეთებს forEach და რა არის აბსტრაქცია)

const manualForEach = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(cb(arr[i]));
    };
};

manualForEach([1, 2, 3, 4, 5, 6], (number) => number * 100);

