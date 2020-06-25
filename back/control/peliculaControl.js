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

function obtenerPeliculas(req, res) {
  Pelicula.find({})
    .then((peliculas) => {
      return res.status(200).send({
        mensaje: "Todas las peliculas retornadas!",
        peliculas: peliculas,
      });
    })
    .catch((err) => {
      return res
        .status(500)
        .send({ mensaje: "Error. No se han podido retornar las peliculas!" });
    });
}

function actualizarPelicula(req, res) {
  // id a partir de url
  const { id } = req.params;

  // Retornar documento actualizado (no el anterior documento)
  const opts = { new: true, useFindAndModify: false };

  // Documento actualizado a traves del cuerpo de la peticion
  const peliculaUpdate = req.body;

  Pelicula.findByIdAndUpdate(
    id,
    peliculaUpdate,
    opts,
    (err, peliculaActualizada) => {
      if (err)
        return res
          .status(500)
          .send({ mensaje: "Error. No se ha podido actualizar la pelicula!" });
      if (!peliculaActualizada)
        return res.status(200).send({
          mensaje: "Error. No se ha encontrado una pelicula que coincida!",
        });
      return res.status(200).send({
        mensaje: "Pelicula actualizada correctamente!",
        pelicula: peliculaActualizada,
      });
    }
  );
}

function borrarPelicula(req, res) {
  const { _id } = req.params;
  const opts = { useFindAndModify: false };

  Pelicula.findOneAndDelete({ _id: _id }, opts, (err, peliculaBorrada) => {
    if (err)
      return res
        .status(500)
        .send({ mensaje: "Error. No se ha podido eliminar la pelicula!" });
    if (!peliculaBorrada)
      return res.status(200).send({
        mensaje: "Error. No se ha encontrado una pelicula que coincida!",
      });
    return res.status(200).send({
      mensaje: "Pelicula borrada correctamente!",
      pelicula: peliculaBorrada,
    });
  });
}

function subirPoster(req, res) {
  const { id } = req.params;
  if (!req.files || Object.keys(req.files).length === 0)
    return res
      .status(200)
      .send({ mensaje: "Error. No ha enviado archivo de imagen" });

  if (!req.files.imagen)
    return res.status(200).send({
      mensaje:
        "Error. Recuerde utilizar `imagen` como el nombre del campo de archivo",
    });

  Pelicula.findById(id, {}, (err, peliculaRegistrada) => {
    if (err)
      return res
        .status(500)
        .send({ mensaje: "Error. No se ha podido subir el poster!" });

    if (!peliculaRegistrada)
      return res
        .status(200)
        .send({ mensaje: "Error. No hay una pelicula que coincida!" });

    const rutaDest = path.resolve("./archivos/pelicula");
    // Crear directorio de archivos (si no existe)
    if (!fs.existsSync(rutaDest)) {
      const opts = { recursive: true };
      fs.mkdirSync(rutaDest, opts)
    }

    // Eliminar archivo actual (si existe)
    if (!fs.existsSync(`${rutaDest}/${peliculaRegistrada.rutaPoster}`)) {
      fs.unlinkSync(`${rutaDest}/${peliculaRegistrada.rutaPoster}`)
    }

  });
}

module.exports = {
  agregarPelicula,
  obtenerPeliculas,
  actualizarPelicula,
  borrarPelicula,
};
