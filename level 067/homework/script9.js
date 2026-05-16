// 11) შექმენით მასივი რომელიც შედგება სხვადასხვა მნიშვნელობებისგან როგორიცაა: boolean - მნიშვნელობები, რიცხვები, string - ები, 
// მასივი, ობიექტი, თქვენი დავალებაა რომ filter მეთოდის გამოყენებით დატოვოთ მხოლოდ ისეთი მნიშვნელობები რომლებიც string - შია მოცემული

const array = [true, false, "Saba", "Giorgi", 10, 22, 11, {name: "Saba"}, "Luka", 10, true, false, true];

const filterArr = array.filter(word => typeof(word) == "string")

console.log(filterArr)

