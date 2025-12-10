// 2) შექმენით web application, სადაც JSON - ის ფორმატით დააბრუნებთ პასუხს, მაგალითად დააბრუნეთ თქვენს შესახებ ინფორმაცია JSON - ის ფორმატში

const http = require("http");

const server = http.createServer((req, res) => {
    res.end(JSON.stringify(["Saba", "Dzidzikashvili", 16, "Georgia", "Tbilisi"]));
});

server.listen(3000, () => {
    console.log("Server Started!");
})