const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Para facilitar pruebas de desarrollo
// ningun campo es obligatorio y todos proporcionan valores
// por defecto
const PeliculaSchema = new Schema({
  nombre: {
    type: String,
    default: "",
  },
  sinopsis: String,
  anio: {
    type: Number,
    default: 0,
  },
  genero: {
    type: String,
    default: "",
  },
  director: {
    type: String,
    default: "",
  },
  enlacePelicula: {
    type: String,
    default: "",
  },
  estado: {
    type: String,
    default: "activo",
  },
  actores: {
    type: [String],
    default: [],
  },
  rutaPoster: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Pelicula", PeliculaSchema);
