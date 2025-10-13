// 17) შექმენით forEach მეთოდის manual ფუნქცია, ახსენით თითოული ეტაპი კომენტარების სახით

// იქმნება ფუნქცია სახელად manualForEach
const manualForEach = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) { // for ციკლის მეშვეობით უვლით მასივის თითოეულ ელემენტს
        console.log(cb(arr[i])); // ვიყენებთ გადმოცებულ ფუნქციას თითოეულ ელემენტზე
    };
};

manualForEach([1, 2, 3, 4, 5, 6], (number) => number * 100); // ვამოწმებთ მანუალს

