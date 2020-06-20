// Modelo de usuario (para operaciones a traves de mongoose)
const Usuario = require("../modelo/usuario");

const fs = require("fs");
const path = require("path");

// Funcion generica para crear un nuevo documento de usuario
function registrarUsuario(req, res) {
  // Utilizar `object destructuring` para mantener el codigo conciso
  const usuario = new Usuario({ ...req.body });

  // Es importante que el correo se encuentre normalizado para facilitar
  // validacion del mismo
  usuario.correo = usuario.correo && usuario.correo.toLowerCase();

  // Antes de almacenar verificar que el correo no se encuentra registrado
  Usuario.findOne({ correo: usuario.correo }, (err, usuarioExistente) => {
    if (err) res.status(500).send({ message: "Error al registrar usuario" });
    else if (usuarioExistente)
      res.status(200).send({
        message: "No fue posible registrar el usuario, correo existente",
      });
    // Aun pueden fallar las otras validaciones
    else
      usuario.save((err, usuarioNuevo) => {
        if (err) {
          res.status(500).send({
            message: "Error al registrar usuario,  validaciones no exitosas",
          });
        } else if (!usuarioNuevo) {
          res.status(200).send({
            message: "No fue posible registrar el usuario",
          });
        } else {
          res.status(200).send({
            message: "Usuario registrado",
            usuario: usuarioNuevo,
          });
        }
      });
  });
}

module.exports = {
  registrarUsuario,
};
