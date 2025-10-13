// 37) შექმენით ერთი ფუნქცია რომელიც ამოწმებს იმ შემთხვევაში თუ მასივში ყველა ელემენტი ლუწია, დააბრუნეთ true 
// მნიშვნელობა სხვა შემთხვევაში კი false, every მეთოდის გარეშე

const numbers = [2, 2, 2, 12, 2, 2, 2, 2];

const evenNums = (array) => {
    let ind = false;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            ind = true;
        } else {
            ind = false;
            break;
        };
    };

    return ind;
};

console.log(evenNums(numbers))

