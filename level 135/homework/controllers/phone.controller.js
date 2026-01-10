const phones = [
    { id: 1, brand: "Apple", model: "iPhone 13", price: 999, quantity: 50 },
    { id: 2, brand: "Samsung", model: "Galaxy S21", price: 799, quantity: 30 },
    { id: 3, brand: "Google", model: "Pixel 6", price: 699, quantity: 20 },
    { id: 4, brand: "OnePlus", model: "9 Pro", price: 969, quantity: 15 },
    { id: 5, brand: "Apple", model: "iPhone 12", price: 799, quantity: 40 },
    { id: 6, brand: "Samsung", model: "Galaxy S20", price: 699, quantity: 25 },
    { id: 7, brand: "Google", model: "Pixel 5", price: 599, quantity: 10 },
    { id: 8, brand: "OnePlus", model: "8T", price: 749, quantity: 18 },
    { id: 9, brand: "Apple", model: "iPhone SE", price: 399, quantity: 60 },
    { id: 10, brand: "OnePlus", model: "9 Pro", price: 969, quantity: 15 },
]

const getAllPhones = (req, res) => {
    res.status(200).json(phones);
}

const getPhoneById = (req, res) => {
    const id = parseInt(req.params.id);

    const phone = phones.find(p => p.id === id);

    if (!phone) {
        return res.status(404).json({ message: "Phone not found!" });
    }

    res.status(200).json(phone);
}

const createPhone = (req, res) => {
    const newPhone = req.body;

    const id = phones.length + 1;

    phones.push({ id, ...newPhone });
    
    res.status(201).json({ id, ...newPhone });
}

const updatePhone = (req, res) => {
    const body = req.body;
    const id = parseInt(req.params.id);

    const phone = phones.find(p => p.id === id);

    if (!phone) {
        
        return res.status(404).json({ message: "Phone not found!" });
    }

    if (body.brand) phone.brand = body.brand;
    if (body.model) phone.model = body.model;
    if (body.price) phone.price = body.price;
    if (body.quantity) phone.quantity = body.quantity;

    res.status(200).json(phone);
}

const deletePhone = (req, res) => {
    const id = parseInt(req.params.id);

    const phoneIndex = phones.findIndex(p => p.id === id);

    if (phoneIndex === -1) {
        return res.status(404).json({ message: "Phone not found!" });
    }

    phones.splice(phoneIndex, 1);

    res.status(204).send();
}

module.exports = { getAllPhones, getPhoneById, createPhone, updatePhone, deletePhone };