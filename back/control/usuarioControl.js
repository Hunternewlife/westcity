// Modelo de usuario (para operaciones a traves de mongoose)
const Usuario = require("../modelo/usuario");

const fs = require("fs");
const path = require("path");

// Funcion generica para crear un nuevo documento de usuario
function registrarUsuario(req, res) {
  // Utilizar `object destructuring` para mantener el codigo conciso
  const usuario = new Usuario({ ...req.body });

  usuario.save((err, usuarioNuevo) => {
    if (err) {
      res.status(500).send({ message: "Error al registrar usuario" });
    } else if (!usuarioNuevo) {
      res.status(200).send({ message: "No fue posible registrar el usuario" });
    } else {
      res.status(200).send({
        message: "Usuario registrado",
        usuario: usuarioNuevo,
      });
    }
  });
}

module.exports = {
  registrarUsuario,
};
