// 1) შექმენიტ სერვერი სადაც გექნებათ 5 განსხვავებული Route, თითოეული უნდა აბრუნებდეს სხვადასხვა ინფოს. ახსენით რა არის Route და Routing კომენტარებით.
// გამოიყენეთ Express

// Route არის URL-ის ნაწილი, რომელიც განსაზღვრავს კონკრეტულ რესურსს ან ფუნქციონალს სერვერზე.
// Routing არის პროცესი, რომლის საშუალებითაც სერვერი განსაზღვრავს, თუ რომელი ფუნქცია ან რესურსი უნდა გამოიძახოს კონკრეტული Route-ის მოთხოვნისას.

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
})

app.post("/login", (req, res) => {
    res.status(201).json({ message: "Account Created!" });
})

app.get("/register", (req, res) => {
    res.status(200).json({ message: "Success", user: { name: "Test", password: "1234" } });
})

app.get("/posts", (req, res) => {
    res.status(200).send("POSTS");
});

app.get("/book", (req, res) => {
    res.status(200).send("BOOK");
})

app.listen(3000, () => {
    console.log("Server Started!");
})