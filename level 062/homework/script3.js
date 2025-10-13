// 3) თქვენი დავალებაა while loop - ის გამოყენებით დაბეჭდოთ 1 დან 30 მდე ისეთი რიცხვები რომლებიც უნაშთოდ იყოფა 3 ზე

const number = 30;

let count = 0;

while (count <= number) {
    if (count % 3 === 0) {
        console.log(count);
    };
    count++;
};

