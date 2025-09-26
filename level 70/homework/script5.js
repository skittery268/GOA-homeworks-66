// 5) შექმენით class - ი სახელად Rectangle რომლის constructor - საც გადეცემა ორი პარამეტრი width, height, getter მეთოდის გამოყენებით 
// დააბრუნეთ ამ Rectangle - ის area ფართობი, შექმენით setter მეთოდი სახელად dimensions მან უნდა მიიღოს ერთი პარამეტრი სახელად value, 
// შეამოწმეთ თუ value - ის type - ი არის რიცხვი და value არის 1 ზე მეტი მაშინ განაახლეთ width, height პარამეტრები, სხვა შემთხვევაში კი 
// დააბრუნეთ 'Invalid dimensions', new - ის გამოყენებით შექმენით 2 განსხვავებული Rectangle - ს ობიექტი

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    };

    set dimensions(value) {
        if (typeof(value) === typeof(5) && value > 1) {
            this.width = value;
            this.height = value;
        } else {
            console.log("Invalid dimensions");
        };
    };
};

const rectangle1 = new Rectangle(100, 200);
const rectangle2 = new Rectangle(50, 100);

