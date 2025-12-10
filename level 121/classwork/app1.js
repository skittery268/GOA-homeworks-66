// 1) შექმენით web app/server http მოდულის დახმარებით Node.js, როდესაც მიიღებთ მოთხოვნას დაუბრუნეთ პასუხად თქვენი სახელი და გვარი

const http = require("http");

const server = http.createServer((req, res) => {
    res.end("საბა ძიძიკაშვილი");
});

server.listen(3000, () => {
    console.log("server started!");
});

