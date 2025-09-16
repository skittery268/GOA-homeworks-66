// 1) პირველრიგში ახსენით კომენტარებით ფაილშივე რა არის hoisting და რატომ არის ის ცუდი, მერე მოიყვანეთ 2 მაგალითი hoistingის (მაგ: ფუნქციის დეკლარაციით შექმენით ფუნქცია და varით ცვლადი)

// როდესაც ამ ყველაფერს შეასრულებთ მერე კომენტარებით ახსენით გადაჭრის გზა (ისაუბრეთ რითი განმსხვავდება let და const var ისგან)

// ახსენით რა არის function expression და მოიყვანეთ ერთი მაგალითი, შექმენიტ ორი გზით ფუნქცია function declaration და function expression და დააკვირდით ორივეს.


// hoisting - ი არის ის მომენტი როდესაც ჩვენმიერ შექმნილი მაგალითად ფუნქციის გამოძახება შეგვიძლია იქამდე სანამ ფუნქცია იყო შექმნილი.
// hoisting - ის მაგალითები:

var name = "Saba";

function myFunc() {
    console.log("example");
};

// ამის გადაჭრის გზა არის let - ის და const - ის გამოყენება, let - ი და const - ი var - ისგან განსხვავდება იმით, რომ let - ის და const - ის გამოყენება არ შეიძლება იქამდე სანამ ისინი არ შეიქმნება, var - ის შეიძლება.

// function expression - ი არის ფუნქციის შექმნა let - ში ან const - ში.
const greet = function() {
    console.log("Hello world");
};


// function declaration:
function hello(name) {
    console.log(`Hello ${name}!`);
};

// function expression:
let helloWorld = function() {
    console.log("Hello World!")
}