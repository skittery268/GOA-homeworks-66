// 1) შექმენით ერთი ფაილი სახელად math.utils.js ამ ფაილში უნდა გქონდეთ ფუნქციები როგორიცაა შეკრება, გამოკლება, გაყოფა, ნამრავლი
// module.exports - ის გამოყენებით გაიტაეთ ფაილიდან ფუნქციები და გამოიყენეთ თქვენს მთავარ ფაილში გატესეტეთ მუშაობა Nodejs - ის გამოყენებით

class mathOperators {
    static sum(a, b) {
        return a + b
    }

    static myFunc(a, b) {
        return a / b
    }

    static multiply(a, b) {
        return a * b
    }

    static difference(a, b) {
        return a - b
    }
}

module.exports = mathOperators;

