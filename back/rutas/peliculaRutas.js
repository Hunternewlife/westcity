const express = require("express");
const PeliculaControl = require("../control/peliculaControl");

// Modulos requeridos para la funcion de subir o mostrar imagen
const path = require("path");
const fs = require("fs");
const fileUpload = require("express-fileupload");

const api = express.Router();

// Utilizar middleware para subir archivos
api.use(fileUpload());

// Ruta para agregar pelicula
api.post("/agregar-pelicula", PeliculaControl.agregarPelicula);

module.exports = api;
