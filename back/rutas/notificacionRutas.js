const express = require('express'),
      notificacionCOntrol= require('../control/notificacionControl');
      api = express();

// Enlace de ruta con control

api.post('/notificacion-email', notificacionCOntrol.generarNotificacion);




// Exportacion de rutas
module.exports = api;