// 25) შექმენით ცვლადი, მაში შეინახეთ string - ი, დაითვალეთ ხმოვნების რაოდენობა და დაბეჭდეთ ის, გადაუარეთ string - ს for of - ის დახმარებით

const string = "საბა";

const vowels = "აეიოუ";

let vowelCount = 0;

for (const i of string) {
    if (vowels.includes(i)) {
        vowelCount++;
    };
};

console.log(vowelCount);

