// 4) მოიძიეთ ინფორმაცია query - ების შესახებ, თქვენი დავალებაა, რომ შეამოწმოთ თუ type უდრის 'admin' - ს დააბრუნეთ შესაბამისი მისალმება მაგალითად 'Hello admin' თუ 'user', 'Hello user', moderator 'Hello moderator' სხვა შემთხვევაში კი დააბრუნეთ მნიშვნელობა 'invalid type', კომენტარების სახით ახსენით თუ რა არის query

// query არის URL - ში კითხვის ნიშნის მერე მოვემული ინფორმაცია.

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    const query = url.parse(req.url, true).query
    if (query.type === "admin") {
        res.end("<h1>Hello admin</h1>");
    } else if (query.type === "user") {
        res.end("<h1>Hello user</h1>");
    } else if (query.type === "moderator") {
        res.end("<h1>Hello moderator</h1>");
    } else {
        res.end("<h1>Invalid type</h1>");
    }
})

server.listen(3000, () => {
    console.log("Server Started!");
})

