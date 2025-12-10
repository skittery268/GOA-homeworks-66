// 4) თქვენ უნდა გქონდეთ ბილიკი სახელად /even-Or-Odd აგრეთვე query ?num={num} რომელშიც შეინახავთ რიცხვს, თქვენი დავალებაა, რომ შეამოწმოთ უდრის თუ არა ბილიკი /even-Or-Odd - ს და მეთოდი უდრის თუ არა GET - ს, თუ მოცემული პირობა არის სწორი მაშინ შეამოწმეთ რიცხვი (კენტი თუ ლუწი) და დააბრუნეთ შესაბამისი ტექსტი, მაგალითად 'Your number is even'

const http = require("http");

const server = http.createServer((req, res) => {
    const { method } = req;
    const url = new URL(req.url, "http://localhost:3000");
    const pathName = url.pathname;
    const number = parseInt(url.searchParams.get("num"));

    if (pathName === "/even-Or-Odd" && method === "GET") {
        if (number % 2 === 0) {
            res.end("Your number is even");
        } else {
            res.end("Your number is odd");
        }
    }
})

server.listen(3000, () => {
    console.log("Server Started!");
})
