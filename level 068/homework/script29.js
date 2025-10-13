// 29) შექემნით ერთი მასივი, მასში კი შეინახეთ string - ები, თქვენი დავალებაა რომ დააბრუნოთ მასივიდან ყველაზე დიდი string - ი

const words = ["word1", "Hello", "World", "my", "name", "is", "Saba"];

words.sort()

let word = words[0];

for (const i in words) {
    if (words[i].length > words[0].length) {
        word = words[i];
    }
}

console.log(word)

