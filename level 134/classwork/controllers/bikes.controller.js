let bikes = [
    { id: 1, name: "Mountain Bike" },
    { id: 2, name: "Road Bike" },
    { id: 3, name: "Hybrid Bike" },
    { id: 4, name: "Electric Bike" },
    { id: 5, name: "BMX Bike" },
    { id: 6, name: "Folding Bike" },
    { id: 7, name: "Cruiser Bike" },
    { id: 8, name: "Recumbent Bike" },
    { id: 9, name: "Tandem Bike" },
    { id: 10, name: "Track Bike" }
]

const getAllBikes = (req, res) => {
    res.status(200).json(bikes);
}

const getBikeById = (req, res) => {
    const id = parseInt(req.params.id);

    const bike = bikes.find(b => b.id === id);

    if (!bike) {
        return res.status(404).json({ message: "Bike not found" });
    }

    res.status(200).json(bike);
}

const createBike = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: "Name is required" });
    }

    const id = Date.now();

    const newBike = { id, name };

    bikes.push(newBike);

    res.status(201).json(newBike);
}

const deleteBike = (req, res) => {
    const id = parseInt(req.params.id);

    const bikeIndex = bikes.findIndex(b => b.id === id);

    if (bikeIndex === -1) {
        return res.status(404).json({ message: "Bike not found" });
    }

    bikes.splice(bikeIndex, 1);

    res.status(204).send();
}

const updateBike = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    let bike = bikes.find(b => b.id === id);

    if (!bike) {
        return res.status(404).json({ message: "Bike not found" });
    }

    if (!name) {
        return res.status(400).json({ message: "Name is required" });
    }

    bike.name = name;

    res.status(200).json(bike);
}

module.exports = { getAllBikes, getBikeById, createBike, deleteBike, updateBike };