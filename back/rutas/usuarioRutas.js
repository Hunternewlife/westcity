const express = require('express');
const UsuarioControl = require('../control/usuarioControl');

var api = express.Router();

// Ruta para registrar usuario
api.post('/registro', UsuarioControl.registrarUsuario);

// Exportar el modulo
module.exports = api;
