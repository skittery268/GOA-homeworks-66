// 2) მოუსმინეთ GET მოთხოვნას '/users/:id?favouriteFilm={favoriteFilm}, მოცემულ ბილკზე, თქვენი დავალებაა, რომ id პარამეტრის გამოყენებით თქვენს მიერ შექმნილ მასივში მოცემული მომხმარებელი იპოვოთ მოიპოვოთ favouriteFilm - კუთვნილებაზე წვდომა და დააბრუნოთ პასუხი შემდეგნაირად, მაგალითად ---> '/users/1?favouriteFilm=exampleFilm ---> returns 'user 1's favourite film to watch is exampleFilm'

const express = require("express");

const app = express();

const users = [
    { id: "1", name: "Alice" },
    { id: "2", name: "Bob" },
    { id: "3", name: "Charlie" },
    { id: "4", name: "David" },
    { id: "5", name: "Eve" },
    { id: "6", name: "Frank" },
    { id: "7", name: "Grace" },
    { id: "8", name: "Hannah" },
    { id: "9", name: "Ian" },
    { id: "10", name: "Judy" }
]

app.get("/users/:id", (req, res) => {
    const favouriteFilm = req.query.favouriteFilm;
    const id = req.params.id;

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).send(`${user.name}'s favourite film to watch is ${favouriteFilm}`);
})

app.listen(3000, () => {
    console.log("Server Started!");
})