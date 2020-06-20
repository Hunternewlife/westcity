const express = require("express");
const app = express();

const cors = require("cors");

// Rutas de la aplicacion
const usuarioRutas = require("./rutas/usuarioRutas");

// Fin de rutas

// Middlewares

// Para que se pueda reconocer el cuerpo de la peticion como JSON
app.use(express.json());

// CORS
app.use(cors());

// Middleware para rutas de usuario
app.use("/api", usuarioRutas);

// Fin de middlewares

module.exports = app;
