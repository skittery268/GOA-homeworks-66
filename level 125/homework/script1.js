// 1) თქვენს პროექტს დაამატეთ DeleteUser ფუნცია, შეამოწმეთ იმ შემთხვევაში თუ მომხმარებლის role არის admin, მაშინ მან უნდა შეძლოს გადმოცემული Id - ით მომხმარებლის წაშლა, თუ Id - ით მომხმარებელი ვერ მოიძებნა გამოიტანეთ მნიშვნელობა “User not found” შესაბამისი status code - ით, გატესტეთ მუშაობა postman - ის გამოყენებით

const http = require("http");
const fs = require("fs");
const url = require("url");

let users = JSON.parse(fs.readFileSync("./level 125/homework/users.json", "utf8", (err, data) => {
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
        fs.writeFileSync("./level 125/homework/users.json", JSON.stringify(users), "utf8", (err) => {
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

const handleDeleteUserRequest = (req, res) => {
    const id = url.parse(req.url, true).query.id;

    if (!thisUser.userEmail) {
        res.writeHead(401, {
            "content-type": "application/json"
        });
        res.end(JSON.stringify({ message: "Please login first" }));
        return;
    } else if (thisUser.role !== "admin") {
        res.writeHead(403, {
            "content-type": "application/json"
        });
        res.end(JSON.stringify({ message: "Access denied. Admins only" }));
        return;
    } else {
        const deleteUser = users.find(user => user.id == id);

        if (deleteUser) {
            const filteredUsers = users.filter(user => user.id != id);
            const correctedUsers = filteredUsers.map((user, index) => ({ ...user, id: index + 1 }));
            users = correctedUsers;
            fs.writeFileSync("./level 125/homework/users.json", JSON.stringify(correctedUsers), "utf8", (err) => {
                if (err) {
                    console.log(err);
                }
            });
            res.writeHead(200, {
                "Content-type": "application/json"
            });
            res.end(JSON.stringify({ message: "User deleted successfully" }));
        }
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
        case "/delete":
            handleDeleteUserRequest(req, res);
            break;
    }
});

server.listen(3000, () => {
    console.log("Server Started!");
})