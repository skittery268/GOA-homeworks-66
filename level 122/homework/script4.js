// 5) უნდა გქონდეთ ბილიკი და query, 
// ბილიკი ---> /user-age 
// query ---> ?age={age}, 
// ჯერ შეამოწმეთ ბილიკი და მეთოდი, შემდეგ ასაკი, თუ ასაკი არის მეტი 18 - ზე გამოიტანეთ მნიშვნელობა 'You are an adult' თუ ასაკი არის 18 - ზე ნაკლები გამოიტანეთ 'You are a kid' სხვა შემთხვევაში კი 'Invalid Age'

const http = require("http");

const server = http.createServer((req, res) => {
    const { method } = req;
    const url = new URL(req.url, "http://localhost:3000");
    const pathName = url.pathname;
    const age = url.searchParams.get("age");

    if (pathName === "/user-age" && method === "GET") {
        if (age > 18) {
            res.end('You are an adult');
        } else if (age < 18) {
            res.end('You are a kid');
        } else {
            res.end('Invalid Age');
        };
    }
})

server.listen(3000, () => {
    console.log("Server Started!");
})