const mongoose = require("mongoose");

const app = require("./app");

const port = 3000;

mongoose.connect(
  "mongodb://localhost:27017/westcity",
  { useNewUrlParser: true },
  (err, res) => {
    if (err) {
      console.log(`Error de conexion a base de datos ${err}!`);
    } else {
      console.log("Conexion a base de datos realizada!");

      app.listen(port, () => {
        console.log(`Servidor escuchando en el puerto ${port}!`);
      });
    }
  }
);
