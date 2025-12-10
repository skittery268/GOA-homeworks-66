// 3) შექმენით ობიექტების/მომხმარებლების მასივი სადაც მინიმუმ 3 მომხმარებელი გექნებატ firstname, lastname და age კუთვნილებებით, თუ ბილიკი იქნება /0 დაუბრუნეთ 
// User is {firstname} {lastname} and {age} years old, ინდექსების მიხედვიტ თუ ინდექსი არ არსებულია დაუბრუნეთ Invalid Req

const http = require("http");

const users = [
    {
        firstname: "საბა",
        lastname: "ძიძიკაშვილი",
        age: 20
    },
    {
        firstname: "გიორგი",
        lastname: "ბერიძე",
        age: 25
    },
    {
        firstname: "ნინო",
        lastname: "მეგრელიშვილი",
        age: 30
    }
];

const server = http.createServer((req, res) => {
    if (req.url === "/0") {
        res.end(`User is ${users[0].firstname} ${users[0].lastname} and ${users[0].age} years old`)
    } else if (req.url === "/1") {
        res.end(`User is ${users[1].firstname} ${users[1].lastname} and ${users[1].age} years old`)
    } else if (req.url === "/2") {
        res.end(`User is ${users[2].firstname} ${users[2].lastname} and ${users[2].age} years old`)
    } else {
        res.end("Invalid Req")
    }
});

server.listen(3000, () => {
    console.log("server started!");
});

