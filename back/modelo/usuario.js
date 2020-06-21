const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Se incluye validacion (campos requeridos y valores por defecto)
const UsuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  documento: {
    type: Number,
    required: true,
  },
  contrasena: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  tarjeta: {
    type: Number,
    required: true,
  },
  suscripcion: {
    type: String,
    required: true,
    enum: ["sheriff", "pistolero"],
  },
  estado: {
    type: String,
    default: "activo",
    enum: ["activo", "inactivo"],
  },
  imagen: {
    type: String,
    default: "",
  },
  rol: {
    type: String,
    default: "usuario",
    enum: ["usuario", "admin"],
  },
});

// Exportar el modelo
module.exports = mongoose.model("Usuario", UsuarioSchema);
