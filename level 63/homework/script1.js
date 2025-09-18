// 2) შექმენით arrow function რომელიც იღებს ორ პარამეტრს პირველი, string - ი, მეორე, string ების მასივი, თქვნმა ფუნქციამ უნდა 
// შეამოწმოს იმ შემთხვევაში თუ გადმოცემული string - ი არ არის მასივში მაშინ ჩაამტეთ ის ახალ ცარიელ მასივში, საბოლოოდ კი დაბეჭდეთ მოცემული მასივი

const addStr = (word, wordArr) => {
    const result = [];

    if (wordArr.includes(word) === false) {
        result.push(word);
    };

    return result;
};

console.log(addStr("Saba", ["Giorgi", "Lile", "Luka"]))

