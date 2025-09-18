// 4) შექმენით ერთი ფუნქცია რომელიც იღებს ერთ პარამეტრს სახელად password თქვენმა ფუნქციამ უნდა შეამოწმოს იმ შემთხვევაში 
// თუ password - ის სიგრძე არის 6 - სიმბოლოზე ნაკლები მაშინ დააბრუნეთ რომ 'Password is Too Short Try again', იმ შემთხვევაში 
// თუ password შეიცავს რიცხვებაც და ასოებსაც მაშინ დააბრუნეთ რომ 'Password Is strong', სხვა შემთხვევაში კი დააბრუნეთ, რომ 
// 'The Password Must Contain numbers and letters and it should be at least 6 characters long', გამოიყენეთ for loop - ი იმისთვის 
// რომ გადაუაროთ გადმოცემულ პარამეტრს და შეამოწმოთ შეიცავს თუ არა password პარამეტრის რომელიღაცა სიმბოლო ასოს ან რიცხვს

const checkPassword = password => {
    if (password.length < 6) {
        return 'Password is Too Short Try again';
    }

    let indentifikator1 = false;
    let indentifikator2 = false;

    for (let i = 0; i < password.length; i++) {
        const numbers = "1234567890";
        if (numbers.includes(password[i])) {
            indentifikator1 = true;
        };
    };

    for (let i = 0; i < password.length; i++) {
        const letters = "qwertyuiopasdfghjklzxcvbnm";
        if (letters.includes(password[i])) {
            indentifikator2 = true;
        };
    };

    if (indentifikator1 === true && indentifikator2 === true) {
        return 'Password Is strong';
    } else {
        return 'The Password Must Contain numbers and letters and it should be at least 6 characters long';
    };
};

console.log(checkPassword("Saba2009"));

