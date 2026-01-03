// 3) შექმენით Route სადაც მეთოდი არის GETხოლო ბილიკი /products, დაამატეთ პარამტერი 
// სახელად name, შემდეგ მაგ პარამეტრის მეშვეობით მოიძიეთ ობიექტში პროდუქტი რომელიც 
// სახელს ემთხვევა product.name === name, თუ ვერ ვიპოვით ვაბრუნებთ 404 ერორს მესიჯით, 
// თუ ვიპოვეთ ვაბრუნებთ მაგ პროდუქტს (ახსენიტ კომენტარებით და მაგალიტებით რა არის 
// parameter და query) რომელია ექსპრესში დამატებითი და რომელიც მატ შორის ლინკის 
// შემადგენენლი ოფიციალური ნაწილი

// parametr - არის URL-ის ნაწილი, რომელიც გამოიყენება დინამიური მნიშვნელობების 
// გადასაცემად Route-ში. მაგალითად, /products/:name-ში :name არის პარამეტრი, რომელიც 
// შეიძლება შეიცავდეს სხვადასხვა პროდუქტის სახელს.
// query - არის URL-ის ნაწილი, რომელიც გამოიყენება დამატებითი ინფორმაციის გადასაცემად 
// მოთხოვნისას. მაგალითად, /products?category=electronics-ში category არის query 
// პარამეტრი.

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

app.get("/products/:name", (req, res) => {
    const { name } = req.params;

    const product = products.find(p => p.name === name);

    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: "Product Not Found!" });
    }
})

app.listen(3000, () => {
    console.log("Server Started!");
})