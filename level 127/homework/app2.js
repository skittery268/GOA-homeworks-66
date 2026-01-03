// 3) შექმენით მასივი სადაც შენახავთ მომხმარებლების ობიექტებს, შექმენით ბილიკი '/
// users' და დააბრუნეთ მოცემული მომხმარებლების მასივი json - ის ფორმატში, შემდეგ კი 
// დაამატეთ ახალი ბილიკი '/users/:id' (მოიძიეთ ინფორმაცია პარამეტრების შესახებ 
// express js - ში), გადმოცემული id - ით იპოვეთ users მასივში კონკრეტული მომხმარებელი 
// და დააბრუნეთ მისი მონაცემები json - ის ფორმატში, აგრეთვე დაამატეთ get მოთხოვნა 
// მოცემულ ბილიკზე '/users/random' რომელიც მოცემულ მასივიდან ამოიღებს random user - ს 
// და დააბრუნებს მის ობიექტს

const express = require('express');

const app = express();

const users = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
    { id: 3, name: "Alice Johnson", age: 28 },
    { id: 4, name: "Bob Brown", age: 35 }
];

app.get("/users", (req, res) => {
    res.status(200).json(users);
})

app.get("/users/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * users.length);
    const randomUser = users[randomIndex];
    res.status(200).json(randomUser);
})

app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(obj => obj.id == id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
})

app.listen(3000, () => {
    console.log("Server Started!");
})