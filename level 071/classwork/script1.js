// 1) შექმნათ კლასი სახელად account, რომლის კონსტრუქტორსაც გადაეცემა პაროლი იმეილი და სახელი, პაროლი და იმეილი უნბდა 
// იყოს პირადული ველები, შექმენით მეთოდი სახელად  introduce რომელიც უბრალოდ დაბეჭდავს იმ ობიექტის სახელს რომლზეც გამოვიძახეთ, 
// შემდეგ შექმენით settter მეთოდი როპმლის გამოყენიბთაც შევცვლით პაროლს, სანამ პაროლის შეცვლის უფლებას მისცემდეთ კლას იქმადე 
// შეამოწმეთ შეიცავს თუ არა პაროლი მინიმუმ 6 სიმბოლო, აგრეთვე პაროლი უნდა შეიცავდეს რიცხვებს და ინგლისურ ასოებს თუ ამ პირობას 
// ვერ დააკმაყოფილებს არ მისცეთ შეცვლის საშუალება, შემდეგ შექმენიტ getter მეთოდი რომლის დახმარებითაც დააბრუნებთღ იმეილს, 
// (კომენტარებით ახსენით განსხვავება კლასსა და ფუნქცვიურ კონსტრუქტორს შორის, მათი მინუსები და პლიუსები გამოკვეთეთ)

class account {
    constructor(password, email, name) {
        this._password = password;
        this._email = email;
        this.name = name;
    }

    introduce() {
        console.log(`My name is ${this.name}`);
    }

    set password(newPassword) {
        let ind1 = false;
        let ind2 = false;
        if (newPassword.length >= 6) {
            for (let i = 0; i < newPassword.length; i++) {
                if ("qwertyuiopasdfghjklzxcvbnm".includes(newPassword[i].toLowerCase())) {
                    ind1 = true;
                }
            }

            for (let i = 0; i < newPassword.length; i++) {
                if ("1234567890".includes(newPassword[i])) {
                    ind2 = true;
                }
            }
        }

        if (ind1 && ind2) {
            this._password = newPassword;
        } else {
            console.log("Password must be at least 6 characters long and contain both letters and numbers.");
        }
    }

    get email() {
        return this._email;
    }
};

// კლასსა და ფუნქციურ კონსტრუქტორს შორის მთავარი განსხვავება ის არის, რომ კლასები უფრო თანამედროვე და მოსახერხებელია ობიექტების შექმნისთვის.

