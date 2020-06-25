const express = require("express");
const PeliculaControl = require("../control/peliculaControl");

// Modulos requeridos para la funcion de subir o mostrar imagen
const path = require("path");
const fs = require("fs");

const api = express.Router();

// Ruta para agregar pelicula
api.post("/agregar-pelicula", PeliculaControl.agregarPelicula);

// Ruta para obtener todas las peliculas
api.get("/obtener-peliculas", PeliculaControl.obtenerPeliculas);

// Ruta para actualizar pelicula
api.put("/actualizar-pelicula/:id", PeliculaControl.actualizarPelicula);

// Ruta para eliminar pelicula
api.delete("/borrar-pelicula/:_id", PeliculaControl.borrarPelicula);

// Ruta para subir poster de una pelicula
api.put("/subir-poster/:id", PeliculaControl.subirPoster);

// Ruta para obtener poster de una pelicula
api.get("/mostrar-poster/:nombrePoster", PeliculaControl.mostrarPoster);

module.exports = api;
