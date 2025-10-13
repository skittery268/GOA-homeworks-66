// 3) შექმენით ობიექტი სახელად  person, ობიექტში დაამატეთ introduce მეთოდი, რომელიც ბეჭდავს person ობიექტი firstname და lastname კუთვნიულებას

const person = {
    firstname: "Saba",
    lastname: "Dzidzikashvili",
    introduce() {
        console.log(this.firstname);
        console.log(this.lastname);
    }
};

console.log(person.introduce());

