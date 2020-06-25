// Archivo para lógica de express (Manejo de rutas, exportación del módulo y manejo de middlewares)

const express = require("express");
const app = express();
// Declaración de cors
const cors = require("cors");

// Declaración de rutas a ejecutar por express
const notificacionRutas = require("./rutas/notificacionRutas");
const peliculaRutas = require("./rutas/peliculaRutas");
const usuarioRutas = require("./rutas/usuarioRutas");

// -- Inicio Middlewares --
app.use(express.json());
app.use(cors());

// Consumo de las rutas
app.use("/api", usuarioRutas);
app.use("/api", peliculaRutas);
app.use("/api", notificacionRutas);

// -- Fin Middlewares --

// Exportación módulo

module.exports = app;
