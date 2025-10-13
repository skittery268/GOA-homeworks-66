// 9) შექმენით ერთი მასივი სადაც გექნებათ რაიმე სიტყვები, forEach - ის დახმარებით გადაუარეთ მასივს და გამოიტანეთ 
// თითოული სიტყვა შებრუნებულად (მოიძიეთ თუ როგორ ხდება სიტყვის შემობრუნება JS - ში )

const wordArr = ["Hello", "World", "My", "Name", "Is", "Saba"];

wordArr.forEach(word => console.log(word.split("").reverse().join("")));

