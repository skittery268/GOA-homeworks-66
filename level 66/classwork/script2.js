// 2) კომენტარების სახით ახსენით თუ რას გამოიტანს მოცემული კოდი:
console.log("Start");  // გაეშვება ტერმინალში სიტყვა start.

// setTimeout - ში ჩაწერილი ფუნქცია გაეშვება ტერმინალში 2 წამის შეყოვნებით.
setTimeout(function () {
    console.log("Inside setTimeout");
}, 2000);

console.log("End"); // გაეშვება ტერმინალში End

// => 
// Start
// End
// Inside setTimeout
