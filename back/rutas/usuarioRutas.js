const express = require("express");
const UsuarioControl = require("../control/usuarioControl");

// Modulos requeridos para la funcion de subir o mostrar imagen
const path = require("path");
const fs = require("fs");
const fileUpload = require("express-fileupload");

const api = express.Router();

// Utilizar middleware para subir archivos
api.use(fileUpload());

// Ruta para registrar usuario
api.post("/registro", UsuarioControl.registrarUsuario);

// Ruta para login de usuario
api.post("/login", UsuarioControl.loginUsuario);

// Ruta para actualizar usuario
api.put("/actualizar/:id", UsuarioControl.actualizarUsuario);

// Ruta para subir imagen de usuario
api.put("/subir-img/:id", UsuarioControl.subirImg);

// Exportar el modulo
module.exports = api;
