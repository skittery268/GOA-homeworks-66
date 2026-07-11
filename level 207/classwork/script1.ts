// 1) შექმენით 2 enum სადაც ერთში მნიშვნელობები გექნებათ 2 დან 
// დაწყებული და მეორეში მხოლოდ სტრინგები შემდეგ კი მიანიჭეთ 
// შექმნილი enum ტიპი ცვლადს

enum Numbers {
    First = 2,
    Second,
    Theerd
};

enum Names {
    Saba = "Saba",
    Nika = "Nika",
    Giorgi = "Giorgi",
    Gocha = "Gocha"
};

let userName: Names;
let number: Numbers;

userName = Names.Saba;
number = Numbers.Second;
