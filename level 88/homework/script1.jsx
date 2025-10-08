// 1) გააკეთეთ რამოდენიმე მაგალითი ternary, && operator - ის გამოყენებით React - ში, ასევე კომენტარების სახით ახსენით მათ შორის განსხვავება, 
// ახსენით თუ რატომ არ შეგვიძლია ჩვეულებრივი if statement - ის გამოყენება JSX - ის tag - ებში

// ternary operator examples:

const age = 16;
const studentCard = true;

function example1() {
    return (
        <h1>{age >= 18 && studentCard ? "Your adult and you have student card" : "You not an adult or your haven't student card."}</h1>
    );
};

function example2() {
    return (
        <h1>{age >= 18 ? "You are adult" : "You not an adult"}</h1>
    )
}

// && operator examples:

function example3() {
    return <h1>{age >= 18 && "You are adult"}</h1>
}

function example4() {
    return <h1>{studentCard && "You have student card"}</h1>
};

// ternary operator - ს აქვს if else - ს ფუნქცია.
// && operator - ს აქვს მარტო if - ის ფუნქცია.

