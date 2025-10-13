// 16) შექმენით ერთი მასივი შეინახეთ მასში სიტყვები, გადაუარეთ მას map მეთოდის გამოყენებით და დააბრუნეთ ამ სიტყვების ბოლო ასო

const wordArr = ["Hello", "World", "My", "Name", "Is", "Saba"];

let newWordArr = wordArr.map(word => word[word.length - 1]);

console.log(newWordArr);

