// 3) შექმენით თქვენი server, შეამოწმეთ იმ შემთხვევაში თუ ბილიკი უდრის /students და მეთოდი უდრის 'GET' - ს მაშინ გამოიტანეთ query text - ში არსებული მნიშვნელობა მაგალითად ?text=Hello World!

const http = require("http");

const server = http.createServer((req, res) => {
    const { method } = req;
    const url = new URL(req.url, "http://localhost:300");
    const text = url.searchParams.get("text");
    const pathName = url.pathname;

    if (pathName === "/students" && method === "GET") {
        res.end(text);
    }
    
})

server.listen(3000, () => {
    console.log("Server Started!");
})