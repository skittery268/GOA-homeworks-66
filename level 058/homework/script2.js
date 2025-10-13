// 4) შექმენით ერთი მასივი, შეინახეთ მასში ფილმები, შექმენით მეორე ცვლადი შეინახეთ მასში თქვენი საყვარელი ფილმი, 
// ternary operator - ის გამოყენებით შეამოწმეთ თუ მასივი შეიცავს თქვენს ფილმს მაშინ გამოიტანეთ რომ 
// "The Film That You Chose Is In The List" სხვა შემთხვევაში კი "The Film That You Chose Is Not In The List"

const films = ["თინეიჯერი მგელი", "შურისმაძიებლები", "ტორი"];

const myFavoriteFilm = "თინეიჯერი მგელი";

console.log(films.includes(myFavoriteFilm) ? "The Film That You Chose Is In The List" : "The Film That You Chose Is Not In The List")

