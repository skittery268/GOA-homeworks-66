// 3) მოუსმინეთ PATCH მოთხოვნას '/users/:id' ბილიკზე, თქვენი დავალებაა, რომ მოცემული id - ით წვდომა მოიპოვოთ შესაბამისი მომხმარებლის ობიექტზე და გაანახლოთ რამოდენიმე კუთვნილება, განახლებული მომხმარებლის ობიექტი შეინახოთ ძველი ობიექტის ნაცვლად, გატესტეთ მუშაობა postman - ის გამოყენებით

const express = require("express");

const app = express();

let users = [
    { id: 1, name: "user1", surename: "user1Surename", age: 15, active: true },
    { id: 2, name: "user2", surename: "user2Surename", age: 24, active: false },
    { id: 3, name: "user3", surename: "user3Surename", age: 28, active: false },
    { id: 4, name: "user4", surename: "user4Surename", age: 14, active: true }
]

app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    let ind = false;

    users = users.map(user => {
        if (user.id === id) {
            ind = true;
            return { ...user, name: "Updated", surename: "Updated" }
        }
        return user;
    })
    if (ind) {
        res.status(200).json({ message: "User information is updated!", newUsers: users });
    } else {
        res.status(404).json({ message: "User not found!" });
    }
})

app.listen(3000, () => {
    console.log("Server Started!");
})