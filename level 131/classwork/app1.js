// 1) დაარეგისტრირეთ 3 Route, პირველი GET /products რომელიც უბრალოდ აბრუნებს ყველა 
// პროდუქტს, მეორე GET /products/:id რომელიც აბრუნებს ერთ პროდუქტს (ჩაატარეთ შემოწმება 
// მოიძიება თუ არა კონკრეტული პროდუქტი), მესამე DELETE /products/:id რომელიც წაშლის 
// მასივიდან პროდუქტს (სანამწ აშლით შეამოწმეთ არსებობს თუ არა პროდუქტი და შემდეგ წაშალეთ)

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

app.listen(3000, () => {
    console.log("Server Started!");
})