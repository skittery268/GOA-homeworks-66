// 3) შექმენით ფორმა, რომელშიც გექნება 3 input email, password, fullname , მოუსმინეთ დადასტურების მოვლენას, როდესაც დადასტურეება 
// მოხდება ფორმიდან ამოიღეთ მ,ნიშვნელობები და გადაეცით Account კლასს რომელსაც ექნება ერთი საერთო set მეთოდი password, შექმენის 
// შემდეგ კი დაამატეთ account ობიექტი accounts მასივში

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
}

let accounts = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.email.value;
    const password = form.password.value;
    const fullName = form.fullname.value;

    const newAccount = new Account(email, password, fullName);

    accounts.push(newAccount);

    console.log(newAccount);
    console.log(accounts);
})

