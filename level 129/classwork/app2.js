// 2) შექმენით GET ტიპის Route /products, რომელსაც მოთხოგვნის გაგზავნისას თან უწერთ 
// querys. example: GET /products?id=2
// თვენი დავალებაა მოიძიოთ ინფროიმაცია როგორ უნდა წაიკითხოთ query express ში, შემდეგ 
// შესაბამისი ID მოიძიეთ პროდუქტი მასივში, თუ იპოვეთ დაუბრუნეთ ეგ პროდუქტი სტატუსის 
// კოდით 200  json ფორმატში, სხვა შემტხვევაში 404 {message: "Product cant be found"}

const express = require("express");

const app = express();

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 25.99,
    rating: 4.5
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 79.99,
    rating: 4.8
  },
  {
    id: 3,
    name: "USB-C Charger",
    price: 19.99,
    rating: 4.3
  },
  {
    id: 4,
    name: "Noise Cancelling Headphones",
    price: 129.99,
    rating: 4.7
  }
];

app.get("/products", (req, res) => {
    const id = parseInt(req.query.id);

    const findProduct = products.find(product => product.id === id);

    if (findProduct) {
        res.status(200).json(findProduct);
    } else {
        res.status(404).json({ message: "Product cant be found" });
    }
})

app.listen(3000, () => {
    console.log("Server Started!");
})