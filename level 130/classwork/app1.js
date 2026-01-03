// 1) შექმენით მასივი სადაც გექნებათ 15 ცხოველის ობიექტი მოცემული

// 2) მოუსმინეთ GET მოთხოვნას '/animals' ბილიკზე, რომელიც დააბრუნებს მთლიან მასივს

// 3) მოუსმინეთ GET მოთხოვნას '/animals/:id' ბილკზე, რომელიც id - ის მიხედვით დააბრუნებს შესაბამისი ცხოველის ობიექტს

// 4) მოუსმინეთ POST მოთხოვნას 'animals' მოცემული ბილკზე, რომელიც თქვენს მიერ შექმნილ ობიექტს არსებულ მასივში ჩაამატებს

// 5) მოუსმნიეთ DELETE მოთხოვნას 'animals/:id' მოცემულ ბილიკზე, რომელიც მოცემული id - ით კონკრეტულ ცხოველის ობიექტს მასივიდან წაშლის

// BONUS
// 6) მოუსმინეთ PATCH - მოთხოვნას 'animals/:id' მოცემულ ბილკზე რომელიც კონკრეტული ცხოველის ობიექტის კუთვნილებებს განაახლებს

const express = require("express");

const app = express();
app.use(express.json());

let animals = [
    { id: 1, name: "Lion", species: "Panthera leo" },
    { id: 2, name: "Tiger", species: "Panthera tigris" },
    { id: 3, name: "Elephant", species: "Loxodonta africana" },
    { id: 4, name: "Giraffe", species: "Giraffa camelopardalis" },
    { id: 5, name: "Zebra", species: "Equus quagga" },
    { id: 6, name: "Panda", species: "Ailuropoda melanoleuca" },
    { id: 7, name: "Kangaroo", species: "Macropus rufus" },
    { id: 8, name: "Penguin", species: "Aptenodytes forsteri" },
    { id: 9, name: "Cheetah", species: "Acinonyx jubatus" },
    { id: 10, name: "Wolf", species: "Canis lupus" },
    { id: 11, name: "Bear", species: "Ursus arctos" },
    { id: 12, name: "Fox", species: "Vulpes vulpes" },
    { id: 13, name: "Rhinoceros", species: "Rhinocerotidae" },
    { id: 14, name: "Hippopotamus", species: "Hippopotamus amphibius" },
    { id: 15, name: "Crocodile", species: "Crocodylinae" },
];

app.get("/animals", (req, res) => {
    res.status(200).json(animals);
})

app.get("/animals/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const animal = animals.find(a => a.id === id);

    if (!animal) {
        return res.status(404).json({ message: "Animal not found!" });
    }

    res.status(200).json(animal);
})

app.post("/animals", (req, res) => {
    const body = req.body;
    const lastId = animals.length + 1;
    animals.push({ ...body, id: lastId });
    res.status(201).json(body);
})

app.delete("/animals/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const animal = animals.find(a => a.id === id);

    if (!animal) {
        return res.end(404).json({ message: "Animal not found!" });
    }

    animals = animals.filter(a => a !== animal);

    res.status(204).json({ message: "Animal deleted successfull!" });
})

app.patch("/animals", (req, res) => {
    const body = req.body;
    animals = animals.map((a, index) => {
        if (a.id === body.id) {
            return { id: index + 1, ...body }
        }
        return a
    })
    res.status(200).json({ message: "Array updated!" });
})

app.listen(3000, () => {
    console.log("Server Started!");
})