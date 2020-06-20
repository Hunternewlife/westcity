const express = require("express");
const UsuarioControl = require("../control/usuarioControl");

var api = express.Router();

// Ruta para registrar usuario
api.post("/registro", UsuarioControl.registrarUsuario);

// Ruta para login de usuario
api.post("/login", UsuarioControl.loginUsuario);

// Exportar el modulo
module.exports = api;
