// 2) შექმენით ბილიკი '/cart', მოუსმინეთ მოთხოვნებს post, get, delete, უნდა შეგეძლოთ cart - შ ახალი item - ის ჩამატება წაშლა და ელემენტების წამოღება (მთლიანად და id - ის მიხედვით)

const express = require("express");

const app = express();
app.use(express.json());

let cart = [
    { id: 1, item: "apple", quantity: 3 },
    { id: 2, item: "banana", quantity: 5 },
    { id: 3, item: "orange", quantity: 2 },
    { id: 4, item: "grape", quantity: 4 },
    { id: 5, item: "mango", quantity: 1 },
    { id: 6, item: "peach", quantity: 6 },
    { id: 7, item: "pear", quantity: 2 },
    { id: 8, item: "kiwi", quantity: 3 },
    { id: 9, item: "pineapple", quantity: 1 },
    { id: 10, item: "watermelon", quantity: 2 }
]

app.get("/cart", (req, res) => {
    res.status(200).json(cart);
})

app.get("/cart/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const product = cart.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
})

app.post("/cart", (req, res) => {
    const product = req.body.product;
    const quantity = parseInt(req.body.quantity);

    const id = cart.length + 1;

    if (!product) {
        return res.status(400).json({ message: "Please write product!" });
    }

    if (!quantity) {
        return res.status(400).json({ message: "Please write quantity" });
    }

    cart.push({ id, item: product, quantity });

    res.status(201).json({ id, item: product, quantity });
})

app.delete("/cart/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const product = cart.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: "Product not found!" });
    }

    cart = cart.filter(p => p !== product);
    cart = cart.map((p, index) => ({ ...p, id: index + 1 }));

    res.status(200).json({ message: "Product deleted successfully!" });
})

app.listen(3000, () => {
    console.log("Server Started!");
})