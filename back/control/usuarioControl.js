// Modelo de usuario (para operaciones a traves de mongoose)
const Usuario = require("../modelo/usuario");

const fs = require("fs");
const path = require("path");

// Funcion generica para crear un nuevo documento de usuario
function registrarUsuario(req, res) {
  // Utilizar `object destructuring` para mantener el codigo conciso
  const { _id, ...nuevoUsuario } = req.body;
  const usuario = new Usuario(nuevoUsuario);

  // Es importante que el correo se encuentre normalizado para facilitar
  // validacion del mismo
  usuario.correo = usuario.correo && usuario.correo.toLowerCase();
  
  // Antes de almacenar verificar que el correo no se encuentra registrado
  Usuario.findOne({ correo: usuario.correo }, (err, usuarioExistente) => {
    if (err) console.log(usuario, err), res.status(500).send({ message: "Error al registrar usuario" })
    else if (usuarioExistente)
      res.status(200).send({
        message: "No fue posible registrar el usuario, correo existente",
      });
    // Aun pueden fallar las otras validaciones
    else
      usuario.save((err, usuarioNuevo) => {
        if (err) {
          console.log(err)
          res.status(500).send({
            message: "Error al registrar usuario, validaciones no exitosas",
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

// Funcion para realizar un login de usuario
function loginUsuario(req, res) {
  const { correo, contrasena } = req.body;
  Usuario.findOne({ correo: correo }, (err, usuarioRegistrado) => {
    if (err) res.status(500).send({ mensaje: "Error al realizar login" });
    else if (!usuarioRegistrado)
      res.status(200).send({ mensaje: "Usuario inexistente" });
    else if (usuarioRegistrado.contrasena === contrasena)
      res
        .status(200)
        .send({ mensaje: "Usuario logueado", usuario: usuarioRegistrado });
    else res.status(200).send({ mensaje: "Contraseña invalida" });
  });
}

// Funcion generica para actualizar un usuario
function actualizarUsuario(req, res) {
  // Validacion de correo
  const { correo } = req.body;
  const _id = req.params.id;

  Usuario.findOne(
    { correo: correo.toLowerCase() },
    (err, usuarioRegistrado) => {
      if (err) res.status(500).send({ mensaje: "Error al actualizar usuario" });
      // Solo el usuario a actualizar deberia tener el mismo correo
      else if (usuarioRegistrado && usuarioRegistrado.id != _id)
        res
          .status(200)
          .send({ mensaje: "Error, el correo ya esta registrado" });
      else {
        // Igualmente, ejecutar las validaciones
        const opts = { runValidators: true };
        Usuario.findByIdAndUpdate(
          _id,
          { ...req.body },
          opts,
          (err, usuarioActualizar) => {
            if (err)
              res
                .status(500)
                .send({ mensaje: "Error al actualizar el usuario" });
            else if (!usuarioActualizar)
              res
                .status(200)
                .send({ mensaje: "No se ha encontrado el usuario" });
            else
              res.status(200).send({
                mensaje: "Operacion de actualizacion exitosa",
                // Aqui el usuario retornado no es el usuario actualizado
                usuario: usuarioActualizar,
              });
          }
        );
      }
    }
  );
}

// Funcion generica para subir la imagen de un usuario
function subirImg(req, res) {
  const _id = req.params.id;
  // Validaciones
  if (!req.files || Object.keys(req.files).length === 0)
    return res.status(200).send({ mensaje: "No ha enviado archivo de imagen" });

  Usuario.findById(_id, (err, usuarioRegistrado) => {
    if (err)
      res.status(500).send({ mensaje: "Error al intentar subir la imagen" });
    else if (!usuarioRegistrado)
      res
        .status(200)
        .send({ mensaje: "No se puede subir la imagen (usuario inexistente)" });
    else {
      // Objeto con informacion del archivo subido, (el nombre del input)
      // en frontend tiene que ser `imagen`
      const { imagen } = req.files;

      // Aceptar solo jpg y png
      const imgType = imagen.mimetype.split("/")[1];
      if (imgType !== "png" && imgType !== "jpeg")
        return res
          .status(200)
          .send({ mensaje: "Tipo de archivo no soportado" });

      // Ruta destino
      destDir = path.resolve("./archivos/usuario");

      // Crear folder (si no existe) funcion sincrona para evitar errores
      const destDirCreado = fs.mkdirSync(destDir, { recursive: true });

      // Eliminar archivo actual (si existe)
      fs.unlink(`${destDir}/${usuarioRegistrado.imagen}`, () => {});

      // Mover el nuevo archivo
      let nombreArchivo = `${Date.now()}-${imagen.name}`;
      imagen.mv(`${destDir}/${nombreArchivo}`, (err) => {
        if (err) {
          console.log(err);
          return res
            .status(500)
            .send({ mensaje: "No se ha podido guardar el archivo" });
        }
        // Actualizar el usuario con nuevo nombre de imagen
        usuarioRegistrado.imagen = nombreArchivo;
        usuarioRegistrado.save((err, usuarioActualizado) => {
          if (err)
            return res
              .status(500)
              .send({ mensaje: "No se ha podido actualizar el usuario" });

          res.status(200).send({
            mensaje: "Imagen subida correctamente",
            usuario: usuarioActualizado,
          });
        });
      });
    }
  });
}

// Funcion generica para retornar la imagen de un usuario
function mostrarImg(req, res) {
  const { nombreImg } = req.params;
  const rutaArchivo = path.resolve(`./archivos/usuario/${nombreImg}`);
  res.sendFile(rutaArchivo, (err) => {
    if (err)
      return res
        .status(500)
        .send({ mensaje: "Error al retornar archivo de imagen" });
  });
}

// Funcion generica para obtener todos los usuarios
function obtenerUsuarios(req, res) {
  Usuario.find({}, (err, usuarios) => {
    if (err)
      return res
        .status(500)
        .send({ mensaje: "No se han podido retornar los usuarios" });
    if (!usuarios)
      return res.status(200).send({ mensaje: "No se han encontrado usuarios" });

    return res.status(200).send({
      mensaje: "Consulta de usuarios exitosa",
      usuarios: usuarios,
    });
  });
}

// Funcion generica para eliminar un usuario
function borrarUsuario(req, res) {
  const { id } = req.params;
  Usuario.findByIdAndDelete(id, (err, usuarioEliminado) => {
    if (err)
      return res
        .status(500)
        .send({ mensaje: "Error al intentar borrar el usuario" });
    if (!usuarioEliminado)
      return res
        .status(200)
        .send({ mensaje: "No se ha encontrado el usuario a eliminar" });

    // Limpiar su archivo de imagen
    const { imagen } = usuarioEliminado;
    const rutaImagen = path.resolve(`./archivos/usuario/${imagen}`);
    // Podria generar excepcion si el archivo no existe, no hay necesidad
    // de gestionar esa excepcion
    fs.unlink(path.resolve(rutaImagen), (err) => {});
    return res.status(200).send({
      mensaje: "Usuario eliminado correctamente",
      usuario: usuarioEliminado,
    });
  });
}

module.exports = {
  registrarUsuario,
  loginUsuario,
  actualizarUsuario,
  subirImg,
  mostrarImg,
  obtenerUsuarios,
  borrarUsuario,
};
