const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// por ahora, ningun campo es requerido (para facilitar tests)
const UsuarioSchema = new Schema({
  nombre: String,
  apellido: String,
  documento: Number,
  contrasena: String,
  correo: String,
  tarjeta: Number,
  suscripcion: String,
  estado: String,
  imagen: String,
  rol: String,
});
