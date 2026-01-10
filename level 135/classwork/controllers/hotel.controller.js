const hotels = [
    { id: 1, name: "Hotel California", location: "California" },
    { id: 2, name: "The Grand Budapest Hotel", location: "Zubrowka" },
    { id: 3, name: "The Overlook Hotel", location: "Colorado" },
    { id: 4, name: "Bates Motel", location: "Fairvale" },
    { id: 5, name: "The Plaza", location: "New York" },
    { id: 6, name: "Hotel Transylvania", location: "Transylvania" },
    { id: 7, name: "The Ritz", location: "London" },
    { id: 8, name: "Marriott", location: "Various Locations" },
    { id: 9, name: "Hilton", location: "Various Locations" },
    { id: 10, name: "Marigold Hotel", location: "Jaipur" }
];

const getAllHotels = (req, res) => {
    res.status(200).json(hotels);
}

const getHotelById = (req, res) => {
    const hotelId = parseInt(req.params.id);
    const hotel = hotels.find(h => h.id === hotelId);

    if (!hotel) {
        return res.status(404).json({ message: "Hotel not found" });
    }

    res.status(200).json(hotel);
}

const createHotel = (req, res) => {
    const body = req.body;

    if (!body.name || !body.location) {
        return res.status(400).json({ message: "Name and location are required" });
    }

    const newHotel = { id: hotels.length + 1, ...body };

    hotels.push(newHotel);
    res.status(201).json(newHotel);
}

const deleteHotel = (req, res) => {
    const id = parseInt(req.params.id);
    const hotelIndex = hotels.findIndex(h => h.id === id);

    if (hotelIndex === -1) {
        return res.status(404).json({ message: "Hotel not found" });
    }

    hotels.splice(hotelIndex, 1);
    res.status(204).send();
}

const updateHotel = (req, res) => {
    const id = parseInt(req.params.id);
    const body = req.body;
    const hotel = hotels.find(h => h.id === id);

    if (!hotel) {
        return res.status(404).json({ message: "Hotel not found" });
    }

    if (!body.name && !body.location) {
        return res.status(400).json({ message: "Hotel name or hotel location are required!" });
    }

    if (body.name) hotel.name = body.name;
    if (body.location) hotel.location = body.location;

    res.status(200).json(hotel);
}

module.exports = { getAllHotels, getHotelById, createHotel, deleteHotel, updateHotel };