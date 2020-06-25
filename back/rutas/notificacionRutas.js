const express = require('express'),
      notificacionControl= require('../control/notificacionControl');
      api = express();

// Enlace de ruta con control

api.post('/notificacion-email', notificacionControl.generarNotificacion);




// Exportacion de rutas
module.exports = api;