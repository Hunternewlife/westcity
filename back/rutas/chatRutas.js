const express = require('express'),
      chatControl= require('../control/chatControl');
      api = express();

// Enlace de ruta con control

api.post('/chat', chatControl.chatComm);


// Exportacion de rutas
module.exports = api;