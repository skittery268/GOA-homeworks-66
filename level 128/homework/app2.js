// 2) შექმენით მასივი და შეინახეთ მასში მომხმარებლების ობიექტები შემდეგი კუთვნილებებით name, surname, age, active ---> true or false, იმ შემთხვევაში თუ მომხმარებელმა query - სახით შემოიტანა ?active=true მაშინ გამოიტანეთ ყველა ის მომხმარებლის ობიექტი რომლის active კუთვნილებაც უდრის true - ს სხვა შემთხვევაში კი პირიქით (გამოიტანეთ ყველა იმ მომხმარებელის ობიექტი რომლის active კუთვნილებაც უდრის false - ს

const express = require("express");

const app = express();

const users = [
    { name: "user1", surename: "user1Surename", age: 15, active: true },
    { name: "user2", surename: "user2Surename", age: 24, active: false },
    { name: "user3", surename: "user3Surename", age: 28, active: false },
    { name: "user4", surename: "user4Surename", age: 14, active: true }
]

app.get("/", (req, res) => {
    const active = req.query.active;

    if (active === "true") {
        const activeUsers = users.filter(user => user.active === true);
        res.status(200).json(activeUsers);
    } else if (active === "false") {
        const noActiveUsers = users.filter(user => user.active === false);
        res.status(200).json(noActiveUsers);
    } else {
        res.status(400).json({ message: "Bad request!" });
    }
})

app.listen(3000, () => {
    console.log("Server Started!");
})