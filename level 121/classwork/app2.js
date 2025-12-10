// 2) req.url გამოყენებით გააკეთეთ სერვერი რომელიც თუ მოთხოვნა გამოგზავნილი იქნება /fullname დაუბრუნეთ თქვენი სახელი გვარი, /firstname დაუბრუნეთ მხოილოდ თქვენი 
// სახელი /lastname დაუბრუნეთ გვარი, თუ არცერთი ბილიკი არ იქნება დაუბრუნეთ Invalid path ეს ტექსტი

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/fullname") {
        res.end("Saba Dzidzikashvili");
    } else if (req.url === "/firstname") {
        red.end("Saba");
    } else if (req.url === "/lastname") {
        res.end("Dzidzikashvili");
    } else {
        res.end("Invalid path")
    }
});

server.listen(3000, () => {
    console.log("server started!");
});

