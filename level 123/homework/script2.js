// 3) შექმენით ერთი ბილიკი, /transform?case={upper, lower}&text={text}, თქვენი დავალებაა, რომ query - დან ამოიღოთ text და გადააქციოთ ის case - ში არსებული მნიშვნელობის მიხედვით შესაბამის რეგისტრში მაგალითად text ---> Hello World case=upper ---> HELLO WORLD 

const http = require("http");

const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://localhost:3000");
    const pathName = url.pathname;
    const textCase = url.searchParams.get("case");
    const text = url.searchParams.get("text");

    if (pathName === "/transform" && textCase && text) {
        if (textCase === "upper") {
            res.end(text.toUpperCase());
        } else if (textCase === "lower") {
            res.end(text.toLowerCase());
        } else {
            res.end("Error");
        }
    }
})

server.listen(3000, () => {
    console.log("Server started!");
})