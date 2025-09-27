// 1) დაამატეთ სტატიკური მეთოდი სახელად checkIfExsists რომელსაც გადაეცემა email, ეს სტატიკური მეთოდი ამოწმებს არსებობს თუ არა accounts მასივი ის 
// იმეილი რომელიც გადმოგვეცა თუ არსებობს დააბრუნებთ true თუ არ არსებობს false

const form = document.querySelector('form');

let accounts = [];

class Account {
    constructor(email, password, fullName) {
        this.email = email;
        this._password = password;
        this.fullName = fullName;
    }

    set password(newPassword) {
        this._password = newPassword;
    }

    static checkIfExsists(email) {
        const check = accounts.find(obj => obj.email === email)
        return Boolean(check);
    };
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.email.value;
    const password = form.password.value;
    const fullName = form.fullname.value;

    if (Account.checkIfExsists(email)) {
        console.log(true);
    } else {
        console.log(false)
    }

    const newAccount = new Account(email, password, fullName);

    accounts.push(newAccount);

    console.log(newAccount);
    console.log(accounts);
})

