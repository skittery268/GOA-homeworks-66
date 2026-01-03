// 2) დაამატეთ პროდუქტის დამატების Route POST /products რომელსაც query დახმარებიტ უნდა გადაეცემოდეს name და price, აგრეთვე დაამატეთ PATCH /products/:id რომელიც შეცვლის არსებულ პროდუქტს, თქვენ მინიმუმ ერთ კუთვნილებას უნდა ელოდებოდეთ ან name ან price, შეამოწმეთ რომელი გადმოგეცათ და მაგის მიხედვით შეცვალეთ ობიექტი, შემდეგ შეცვლილი ობიექტი დააბრუნეთ.

const express = require("express");

const app = express();

let products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
    { id: 4, name: "Product 4", price: 400 },
    { id: 5, name: "Product 5", price: 500 },
    { id: 6, name: "Product 6", price: 600 },
    { id: 7, name: "Product 7", price: 700 },
    { id: 8, name: "Product 8", price: 800 },
    { id: 9, name: "Product 9", price: 900 },
    { id: 10, name: "Product 10", price: 1000 }
]

app.get("/products", (req, res) => {
    res.status(200).json(products);
})

app.get("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
})

app.delete("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: "Product not found!" });
    }

    products = products.filter(p => p !== product);

    res.status(204).json({ message: "Product delited successfull!" });
})

app.post("/products", (req, res) => {
    const { name, price } = req.query;

    if (!name || !price) {
        return res.status(400).json({ message: "Name and price are required!" });
    }

    const id = products.length + 1;

    const product = { id, name, price };

    products.push(product);

    res.status(201).json(product);
})

app.patch("/products/:id", (req, res) => {
    const { name, price } = req.query;
    const id = parseInt(req.params.id);

    if (!name && !price) {
        return res.status(400).json({ message: "name or price are requared!" });
    }
    
    const product = products.find(p => p.id === id);
    const productIndex = products.findIndex(p => p.id === id);

    if (product) {
        if (name && price) {
            product.name = name;
            product.price = price;
        } else if (name) {
            product.name = name;
        } else if (price) {
            product.price = price;
        }
    }

    products.splice(productIndex, 1, product);

    res.status(200).json(products);
})

app.listen(3000, () => {
    console.log("Server Started!");
})