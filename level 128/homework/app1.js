// 1) შექმენით მასივი სადაც შეინახავთ პროდუქტების ობიექტებს, თქვენი დავალებაა, რომ query - დან გამომიდინარე დააბრუნოთ შესაბამისი პროდუქტი, მაგალითად /products?name='exampleProduct'&price=2637 returns ---> {
//   name: 'exampleProduct'
//   price: '2637'
//   rating: 5
// }

const express = require("express");

const app = express();

const products = [
    { name: "example1Product", price: "2637", rating: 5 },
    { name: "example2Product", price: "3982", rating: 4 },
    { name: "example3Product", price: "2023", rating: 5 }
]

app.get("/products", (req, res) => {
    const { name, price } = req.query;

    let ind = false;

    for (const product of products) {
        if (product.name === name && product.price === price) {
            ind = true;
            res.status(200).json(product);
        }
    }

    if (!ind) {
        res.status(404).json({ message: "Product not found!" });
    }
})

app.listen(3000, () => {
    console.log("Server Started!");
})