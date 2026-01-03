// 2) შექმენით orders მასივი, გააგზავნეთ post მოთხოვნა და მიიღეთ id, productId (product - ის id - ს 
// განსაზღვრათ თქვენით და დაამატებთ order - ის ობიექტშიც) query - დან, შეამოწმეთ შემოიტანა თუ არა 
// მომხმარებელმა query - ში ორივე მნიშვნელობა, თუ არა გამოიტანეთ შესაბამისი error - ის message - ი, სხვა 
// შემთხვევაში კი orders მასივში დაამატეთ ახალი order, დაამატეთ get მოთხოვნაც რომელიც user id - ის 
// დახმარებით წამოიღებს მის order - ს, დაამატეთ get '/orders' მოთხოვნაც რომელიც ყველა მომხმარებლის order 
// - ს წამოიღებს, დაამატეთ delete მოთხოვნაც რომელიც მომხმარებელის order - ს წაშლის მისი id - ის მიხედვით

const express = require("express");

const app = express();

let orders = [];

app.post("/orders", (req, res) => {
    const { productId, order } = req.query;

    if (!productId && !order) {
        return res.status(400).json({ message: "order and product id are required!" })
    }

    const id = orders.length + 1;

    const newOrder = { id, productId, order };
    orders.push(newOrder);
    res.status(201).json(newOrder);
})

app.get("/orders", (req, res) => {
    res.status(200).json(orders);
})

app.get("/orders/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const order = orders.find(o => o.id === id);

    if (!order) {
        return res.status(404).json({ message: "Order not found!" });
    }

    res.status(200).json(order);
})

app.delete("/orders/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const order = orders.find(o => o.id === id);

    if (!order) {
        return res.status(404).json({ message: "Order not found!" });
    }

    const orderIndex = orders.findIndex(o => o.id === id);

    orders.splice(orderIndex, 1);
    res.status(204).json({ message: "Order delited successfull!" });
})

app.listen(3000, () => {
    console.log("Server Started!");
})