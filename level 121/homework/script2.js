// 3) შექმენით server - ი, შეამოწმეთ ბილიკი თუ ბილიკი არის /text დააბრუნეთ ჩვეულებრივი ტექსტი, თუ /json გამოიტანეთ რაიმე ინფორმაცია JSON - ის ფორმატში, თუ /number გამოიტანეთ რაიმე რიცხვი

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/text") {
        res.end("Saba Dzidzikashvili");
    } else if (req.url === "/json") {
        res.end(JSON.stringify([{name: "Saba", lastName: "Dzidzikashvili"}, {name: "user", lastName: "User last name"}]));
    } else if (req.url === "/number") {
        res.end("16");
    };
});

server.listen(3000, () => {
    console.log("Server Started!");
});

