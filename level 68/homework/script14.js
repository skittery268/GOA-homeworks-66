// 14) შექმენით string - ების მასივი, map მეთოდის გამოყენებით, გადააქციეთ თითო string - ი lowerCase ში და მოაშორეთ ყველა სთრინგს space - ი

const strings = ["HELLO MY NAME IS SABA", "WHAT'S YOUR NAME?", "I AM HUMAN"];

const newStr = strings.map(string => {
    let x = [];
    let y = "";

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            y += string[i].toLowerCase();
        } else {
            x.push(y);
            y = "";
        }
    };

    return x;
});

console.log(newStr)

