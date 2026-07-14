// 5) შექმენით მასივი, რომლის ტიპი იქნება (string | number)[]. 
// დაამატეთ მინიმუმ 3 სტრინგი და 3 რიცხვი. შემდეგ for...of 
// ციკლის გამოყენებით შეამოწმეთ თითოეული ელემენტის ტიპი. თუ 
// ელემენტი სტრინგია, დაბეჭდეთ იგი დიდი ასოებით (toUpperCase()), 
// ხოლო თუ რიცხვია, დაბეჭდეთ მისი კვადრატი.

const wordsAndNumbers: (string | number)[] = ["Saba", 5, "Luka", 10, "Nika", 15];

for (const value of wordsAndNumbers) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value ** 2);
    };
};

