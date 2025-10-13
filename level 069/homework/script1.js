// 2) შექმენით მომხმარებლის ობიექტი ოთხი კუთვნილებით (name, surname, age, country), getter მეთოდის გამოყენებით დააბრუნეთ ამ მომხმარებლის 
// სახელი გვარი და საცხოვრებელი ადგილი, setter მეთოდის დახმარებით კი შეამოწმეთ თუ მომხმარებლის ასაკი მეტია ან ტოლი 18 - ის მაშინ შეცვალეთ 
// მისი ასაკი, სხვა შემთხვევაში კი გამოუტანეთ რომ 'The person is not an adult', ასევე ახსენით კომენტარების სახით თუ რა განსხვავებაა getter და 
// setter მეთოდს შორის

const user = {
    name: "Saba",
    surename: "Dzidzikashvili",
    age: 16,
    country: "Georgia",

    get info() {
        return `${this.name}, ${this.surename}, ${this.country}`;
    },

    set userAge(uAge) {
        if (uAge >= 18) {
            user.age = uAge;
        } else {
            console.log("The person is not an adult");
        };
    }
};

