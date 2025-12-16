// 2) stage - ის chat - ში გადმოგზავნილ კოდს, თქვენით დაამატეთ საკლსო დავალებებში მოცემული BONUS დავალება

const http = require("http");
const fs = require("fs");

const products = JSON.parse(fs.readFileSync("./level 124/classwork/products.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    }
    return data;
}));

const readBody = req => {
    return new Promise((resolve, reject) => {
        let body = "";

        req.on("data", chank => {
            body += chank.toString();
        })

        req.on("end", () => {
            try {
                const parsed = JSON.parse(body);
                resolve(parsed);
            } catch (error) {
                reject(error);
            }
        })

        req.on("error", reject);
    })
}

const handleGetRequest = (req, res) => {
    const url = new URL(req.headers.host + req.url);
    const id = url.searchParams.get('id');
    
    if(req.url.startsWith('/products') && id) {
        const productIndex = products.findIndex(product => product.id == id);

        console.log(productIndex)

        if(productIndex === -1) {
            res.writeHead(404, {
                'content-type': 'application/json'
            });
            res.end(JSON.stringify({
                message: "Product not found!"
            }))
        }

        res.writeHead(200, {
            'content-type': 'application/json'
        });
        res.end(JSON.stringify(products[productIndex]));
    } else if(req.url.startsWith('/products')) {
        res.writeHead(200, {
            'content-type': 'application/json'
        });
        res.end(JSON.stringify(products));
    }
};

const handlePostRequest = async (req, res) => {
    const url = new URL(req.url, "http://localhost:3000");
    const pathName = url.pathname;
    
    if (pathName === "/product") {
        try {
            const body = await readBody(req);
            const product = { ...body, id: products[products.length - 1].id + 1 };
            products.push(product);
            fs.writeFileSync("./level 124/classwork/products.json", JSON.stringify(products));
            res.writeHead(201, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Product added successfully" }));
        } catch (error) {
            console.log(error);
        }
    }
}

const handleDeleteRequest = (req, res) => {
    const url = new URL(req.url, "http://localhost:3000");
    const pathName = url.pathname;
    const id = parseInt(url.searchParams.get("id"));

    if (pathName === "/products/product" && id) {
        const newProducts = products.filter(product => product.id !== id);
        fs.writeFileSync("./level 124/homework/products.json", JSON.stringify(newProducts));

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "succesfull" }));
    }
}

const server = http.createServer((req, res) => {
    const { method } = req;

    switch (method) {
        case "GET":
            handleGetRequest(req, res);
            break;
        case "POST":
            handlePostRequest(req, res);
            break;
        case "DELETE":
            handleDeleteRequest(req, res);
            break
        default:
            res.writeHead(405, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Method not allowed" }));
    }
})

server.listen(3000, () => {
    console.log("Server started!");
})