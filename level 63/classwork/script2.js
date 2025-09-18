// 2) შექმენით ფუნქციის გამოსახულება (შეინახეთ ფუნბქცია const ში) რომელსაც გადაეცემა წინადადება (სტრინგი) თქვენი დავალებაა ამ 
// სტრინგში დაითვალოთ სფეისების რაოდენოპბა for ციკლით

const sentensive = "Hello world, my name is Saba";
console.log(sentensive);

const spaceCount = function(string) {
    let spaceSum = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            spaceSum++;
        };
    };

    return spaceSum;
};

console.log(`Space count: ${spaceCount(sentensive)}`);

