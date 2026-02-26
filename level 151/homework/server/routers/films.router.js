const express = require('express');
const { getAllFilms, addNewFilm, deleteFilm, changeFilm } = require('../controllers/films.controller');

const filmsRouter = express.Router();

filmsRouter.get("/", getAllFilms);

filmsRouter.post("/", addNewFilm);

filmsRouter.delete("/:id", deleteFilm);

filmsRouter.put("/:id", changeFilm);

module.exports = filmsRouter;