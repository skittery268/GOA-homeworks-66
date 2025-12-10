// 1) შექმენით 3 html ფაილი მაგ: index, about, login, ჩაწერეთ ამ HTML ფაილებში შესაბამისი კოდი და მოათავსეთ ისინი pages ფოლდერში, შემდეგ შექმენიტ სერვერი, 
// რომელიც ბილიკის სახელის მიხედვიტ დააბრუნებს სერვერიდან html ფაილს მაგ: /home დაუბრუნეთ index.html ფაილი და ასშ (ამის გასაკეთებლად მოიძიეთ ინფორმაცია 
// როგორ უნდა დააბრუნოთ სერვერიდან html ფაილები, აგრეთვე გამოიყენეთ writeHead თუ საჭიროება მოითხოვს.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://localhost:3000");
    const pathName = url.pathname;

    if (pathName === "/") {
        fs.readFile("./level 123/classwork/pages/index.html", "utf-8", (err, data) => {
            if (err) {
                res.writeHead(404, "Page not found");
                res.end("Not found");
            } else {
                res.writeHead(200, "OK", {
                    "Content-Type": "text/html"
                });
                res.end(data);
            }
        })
    } else if (pathName === "about") {
        fs.readFile("./level 123/classwork/pages/about.html", "utf-8", (err, data) => {
            if (err) {
                res.writeHead(404, "Page not found");
                res.end("Not found");
            } else {
                res.writeHead(200, "OK", {
                    "Content-Type": "text/html"
                });
                res.end(data);
            }
        })
    } else if (pathName === "login") {
        fs.readFile("./level 123/classwork/pages/login.html", "utf-8", (err, data) => {
            if (err) {
                res.writeHead(404, "Page not found");
                res.end("Not found");
            } else {
                res.writeHead(200, "OK", {
                    "Content-Type": "text/html"
                });
                res.end(data);
            }
        })
    }
});

server.listen(3000, () => {
    console.log("Server Started!");
})