// 2) თქვენი ობიექტის ტიპი სახელად Person სადაც 3 კუთვნბილება 
// გექნებათ, შემდეგ შექმენით union ტიპის მასივი სადაც ან სტრინგს 
// შეინახავთ ან Person ტიპს

type Person = {
    name: string,
    email: string,
    password: string
};

const users: (string | Person)[] = [];

