// 1) შექმენით function constructor - ი სახელად Car, რომელიც იღებს ოთხ პარამეტრს make, model, year, color, this - ის გამოყენებით 
// მოცემული პარამეტრები მიანიჭეთ ობიექტს

function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
};

