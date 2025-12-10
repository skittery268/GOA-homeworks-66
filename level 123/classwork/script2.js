// 2) შექმენით AI დახმარებით products.jsonფაილი, რომელშიც 50 მდე სხვადასხვა კატეგორიის პროდუქტები იქნება 
// მოცემული JSON ფორმატში, როდესაც მოთხოვნას მიიღებთ გამოიყენეთ URL კონსტრუქტორი ლინკის ნაკუწებად გადასაქცევად 
// შემდეგ querystring.parse მეთოდი, query (საძიებელი სიტყვების) ობიექტის სახიდ გარდაქმნისთვის, გექნებათ ორი 
// ფილტარატორი ფასი და კატეგორია, რის მიხედვითაც უნდა დააბრუნოთ JSON სახით ინფორმაცია

// მაგ: /products?category=medicine

// result: 

// [
//  {
//    id:1,
//  }
// }

const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://localhost:3000");
    const query = querystring.parse(url.searchParams.toString());

    fs.readFile("./level 123/classwork/products.json", "utf-8", (err, data) => {
        if (err) {
            res.writeHead(404, "File not found");
            res.end("Error reading products file");
        } else {
            let products = JSON.parse(data);
            if (query.category) {
                products = products.filter(product => product.category === query.category);
            }
            if (query.price) {
                products = products.filter(product => product.price === query.price);
            }
            res.writeHead(200, "OK", {
                "Content-Type": "application/json"
            });
            res.end(JSON.stringify(products));
        }
    });
});

server.listen(3000, () => {
    console.log("Server Started!");
});

