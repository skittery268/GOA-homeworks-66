const express = require("express");

const carsRouter = express.Router();
carsRouter.use(express.json());

let cars = [
    { id: 1, make: "Toyota", model: "Corolla", year: 2020 },
    { id: 2, make: "Honda", model: "Civic", year: 2019 },
    { id: 3, make: "Ford", model: "Focus", year: 2018 }
];

carsRouter.get("/", (req, res) => {
    res.status(200).json(cars);
})

carsRouter.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const car = cars.find(c => c.id === id);

    if (!car) {
        return res.status(404).json({ message: "Car not found!" });
    }

    res.status(200).json(car);
})

carsRouter.post("/", (req, res) => {
    const { make, model, year } = req.query;

    if (!make || !model || !year) {
        return res.status(400).json({ message: "Make, model and year are required!" });
    }

    const car = { make, model, year };

    cars.push(car);

    res.status(201).json(car);
})

carsRouter.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const carIndex = cars.findIndex(c => c.id === id);

    if (carIndex === -1) {
        return res.status(404).json({ message: "Car Not Found!" });
    }

    cars.splice(carIndex, 1);

    res.status(204).send();
})

carsRouter.patch("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const { make, model, year } = req.query;

    if (!make && !model && !year) {
        return res.status(400).json({ message: "At least one field (make, model, year) is required to update!" });
    }

    const car = cars.find(c => c.id === id);
    const carIndex = cars.findIndex(c => c.id === id);

    if (!car) {
        return res.status(404).json({ message: "Car Not Found!" });
    }
    
    if (make) car.make = make;
    if (model) car.model = model;
    if (year) car.year = year;

    cars.splice(carIndex, 1, car);

    res.status(200).json(car);
});

module.exports = carsRouter;