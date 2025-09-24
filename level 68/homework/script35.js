// 35) შექმენით ერთი ფუნქცია რომელსაც გადაეცემა ორი პარამეტრი, პირველი string - ი მეორე ასო, თვქენმა ფუნქციამ უნდა შეამოწმოს 
// თუ რამდენჯერ გვხვდება გადმოცემული ასო string - ში

const findLetterCount = (str, letter) => {
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            sum++;
        };
    };

    return `"${letter}" ასო გვხვდება სიტყვა "${str}"-ში ${sum}-ჯერ.`;
};

console.log(findLetterCount("საბა", "ა"))

