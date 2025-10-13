// 1) შექმენით რაიმე კომპონენტი, სადაც გექნებათ ერთი h1 თეგი, შექმენით ერთი ცვლადი სახელად age შეინახეთ მასში რაიმე მნიშვნელობა, 
// JSX - ში <h1></h1> თეგში ternary operator - ის გამოყენებით შეამოწმეთ თუ age ცვლადის მნიშვნელობა მეტია ან ტოლი 18 - ის დააბრუნეთ 
// მნიშვნელობა You are an adult, სხვა შემთხვევაში კი You are not an adult

const age = 18;

const example = () => {
    return <h1>{age >= 18 ? "You are an adult" : "You are not an adult"}</h1>
};

