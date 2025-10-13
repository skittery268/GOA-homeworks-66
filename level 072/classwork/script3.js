// 3) შექმენით სტატიკური მეთოდი getFromStorage რომელსაც გადაეცემა ერთი პარამეტრი სახელად key, მაგ გასაღების მეშვეობით ლოკალური 
// ბაზიდან წამოიღეთ შენახული ინფორმაცია, შემდეგ JSON.parseმეთოდით გადაიყვანეთ ჯსონის ფ0ორმატიტდან ჯკავასკრიტპის მონაცემის ფორმატში, 
// თუ დაბრუნებული მნიშვნელობა იქნაბე null მაგ შემთხვევაში სტატიკური მეთოდიდან დააბრუნეთ [] ცარიელი მასივი, შემდეგ შეცვლეთ კოდი და 
// გამოიყენეთ ეს სტატიკური მეთოდი  checkIfExsist ში და addToStorage ში (მოიძეთ ინფორმაცია json შესახებ და ახსენით კომენტარებით რა 
// არის ჯსონი და ლოკალური ბაზა)

const form = document.querySelector('form');

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
        const accounts = Account.getFromStorage('accounts')
        const check = accounts.find(obj => obj.email === email)
        return Boolean(check);
    };

    static getFromStorage(key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    }

    static addToStorage(account) {
        const accounts = Account.getFromStorage('accounts')
        const check = Account.checkIfExsists(account.email);

        if (check) {
            alert("This Email is exsist");
            return;
        }

        accounts.push(account)

        localStorage.setItem("accounts", JSON.stringify(accounts))
    };
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.email.value;
    const password = form.password.value;
    const fullName = form.fullname.value;

    const newAccount = new Account(email, password, fullName);

    Account.addToStorage(newAccount);
})

