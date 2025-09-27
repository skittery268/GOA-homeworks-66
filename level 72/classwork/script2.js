// 2) დაამატეთ სტატიკური მეთოდი AddToStorage რომელსაც გადაცემეა Account კლასით შექმნილი ობიექტი, სანამ დაამატებთ ამ ობნიექტს 
// მასივში იქამდე გამოიძახეთ checkIfExsist სტატიკური მეთოდი რომ დარწმუნეთ აქაუნტის არარსებობაში, თუ არ არსებოპბს აქაუნთი 
// კონკრეტული იმეილით დაამატეთ მასივში თუ არსებობს გამოიძახეთ alert და უთხარით მომხმარებელს რომ რეგისტრაცია წარუმატებლად 
// დასრულდა მიზეზი აქქუნთი რეგისტრირებულია და გათიშეთ სტატიკური მეთოდი

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

    static addToStorage(account) {
        const check = Account.checkIfExsists(account.email);

        if (check) {
            alert("This Email is exsist");
            return;
        }

        accounts.push(account);
    };
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.email.value;
    const password = form.password.value;
    const fullName = form.fullname.value;

    const newAccount = new Account(email, password, fullName);

    Account.addToStorage(newAccount);

    console.log(newAccount);
    console.log(accounts);
})

