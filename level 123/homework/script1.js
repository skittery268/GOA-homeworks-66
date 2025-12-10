// 2) შექმენით cars.json - სადაც გექნებათ მოცემული მანქანების ინფორმაცია, თითოეულს უნდა ჰქონდეს თავისი id, იმ შემთხვევაში თუ მომხმარებლის მიერ შემოტანილი ბილიკი === '/' მაშინ დააბრუნეთ მთლიანი cars.json ინფორმაცია, იმ შემთხვევაში თუ მომხმარებელს შემოიტანა ბილიკი 'cars/car?id={carId}' მაშნ მომხმარებელს json ფორმატში გამუტანეთ ამ id - ის მიხედვით მანქანის ინფორმაცია, იმ შმთხვევაში თუ მომხმარებელმა query - სახით შემოიტანა ისეთი მანქანის id რომელიც არ არსებობს დაუბრუნეთ error

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://localhost:3000");
    const pathName = url.pathname;
    const id = url.searchParams.get("id") - 1;

    if (pathName === "/") {
        fs.readFile("./level 123/homework/cars.json", "utf-8", (err, data) => {
            if (err) {
                res.writeHead(404, "file not found");
                res.end("Error");
            } else {
                res.writeHead(200, {
                    "content-type": "application/json"
                });
                res.end(data);
            }
        })
    } else if (pathName === "/cars/car" && id >= 0) {
        fs.readFile("./level 123/homework/cars.json", "utf-8", (err, data) => {
            if (err) {
                res.writeHead(404, "file not found");
                res.end("Error");
            } else {
                res.writeHead(200, {
                    "content-type": "application/json"
                });

                const cars = JSON.parse(data);

                res.end(JSON.stringify(cars[id]))
            }
        })
    } else {
        res.end("Error");
    }
})

server.listen(3000, () => {
    console.log("Server Started!");
})

