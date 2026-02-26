const Film = require("../models/films.model");

const getAllFilms = async (req, res) => {
    try {
        const films = await Film.find();

        res.status(200).json(films);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const addNewFilm = async (req, res) => {
    try {
        const { name, author, genre, description } = req.body;

        const newFilm = await Film.create({ name, author, genre, description });

        res.status(201).json(newFilm);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const deleteFilm = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedFilm = await Film.deleteOne({ _id: id });

        res.status(200).json(deletedFilm);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const changeFilm = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, author, genre, description } = req.body;

        if (name) await Film.updateOne({ _id: id }, { $set: { name } });
        if (author) await Film.updateOne({ _id: id }, { $set: { author } });
        if (genre) await Film.updateOne({ _id: id }, { $set: { genre } });
        if (description) await Film.updateOne({ _id: id }, { $set: { description } });

        res.status(200).json(await Film.findById(id));
    } catch (err) {
        res.status(500).json(err.message);
    }
}

module.exports = { getAllFilms, addNewFilm, deleteFilm, changeFilm };