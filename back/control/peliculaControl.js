// Modelo de mongoose para una pelicula
const Pelicula = require("../modelo/pelicula");

// Operaciones con rutas y con el sistema de archivos
const fs = require("fs");
const path = require("path");

function agregarPelicula(req, res) {
  // Desechar _id cuando se registra la pelicula
  const { _id, ...nuevaPelicula } = req.body;

  // Crear documento pelicula a partir de los datos enviados
  const pelicula = new Pelicula(nuevaPelicula);

  // Almacenar en BDD
  pelicula
    .save()
    .then((agregada) => {
      return res.status(200).send({
        mensaje: "Nueva pelicula almacenada!",
        pelicula: agregada,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        mensaje: "Error. No se ha podido almacenar la nueva pelicula!",
      });
    });
}

module.exports = {
  agregarPelicula,
};
