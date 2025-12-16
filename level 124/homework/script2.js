// 3) შექმენით პროექტი სადაც, მომხმარებელს შეეძლება რეგისტრაციის და ავტორიზაციის გავლა, შეამოწმეთ მოცემული მომხმარებლის ინფორმაცია, თუ მომხმარებელი უკვე არსებობს იგივე email - ით ფაილში, გამოიტანეთ message - 'An email is already registered', როდესაც მომხმარებელი გაივლის ავტორიზაციას და მისი მონაცემები იყო სწორი გამოიტანეთ ამ მომხმარებლის ობიექტი, რომელიც შეინახეთ ფაილში

const http = require("http");
const fs = require("fs");
const url = require("url");

let users = JSON.parse(fs.readFileSync("./level 124/homework/users.json", "utf8", (err, data) => {
    if (err) {
        return err;
    }

    return data;
}));

let thisUser = {
    userName: "",
    userEmail: "",
    password: "",
    role: ""
};

const readBody = req => {
    return new Promise((resolve, reject) => {
        let body = "";

        req.on("data", (chank) => {
            body += chank.toString();
        })

        req.on("end", () => {
            try {
                const parsed = JSON.parse(body);
                resolve(parsed);
            } catch (err) {
                reject(err);
            }
        })
    })
}

const handleRegisterRequest = async (req, res) => {
    const body = await readBody(req);
    const isUser = users.find(user => user.userEmail === body.userEmail);

    if (!isUser) {
        body.id = users.length + 1;
        body.role = "user";
        users.push(body);
        fs.writeFileSync("./level 124/homework/users.json", JSON.stringify(users), "utf8", (err) => {
            if (err) {
                console.log(err);
            }
        });
        res.writeHead(201, {
            "Content-type": "application/json"
        });
        res.end(JSON.stringify({ message: "User registered successfully" }));
    } else {
        res.writeHead(409, {
            "Content-type": "application/json"
        });
        res.end(JSON.stringify({ message: "User already exists" }));
    }
}

const handleLoginRequest = async (req, res) => {
    const body = await readBody(req);
    const isUser = users.find(user => user.userEmail === body.userEmail && user.password === body.password);

    if (isUser) {
        thisUser = isUser;
        res.writeHead(200, {
            "Content-type": "application/json"
        });
        res.end(JSON.stringify({ message: "Login successful" }));
    } else {
        res.writeHead(401, {
            "content-type": "application/json"
        });
        res.end(JSON.stringify({ message: "Invalid Email or Passsword" }));
    }
}

const server = http.createServer((req, res) => {
    const pathName = url.parse(req.url, true).pathname;

    switch (pathName) {
        case "/register":
            handleRegisterRequest(req, res);
            break;
        case "/login":
            handleLoginRequest(req, res);
            break;
    }
});

server.listen(3000, () => {
    console.log("Server Started!");
})