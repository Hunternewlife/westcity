const Notificacion = require('../modelo/notificacionCorreo');
const nodemailer = require("nodemailer");

function generarNotificacion(req,res){

    let notificacion = new Notificacion();

    notificacion.titulo = req.body.titulo;
    notificacion.tipo = req.body.tipo;
    notificacion.contenido = req.body.contenido;
    // logica para realizar el mensaje que se enviará por correo


    //logica para enviar por correo el mensaje realizado 

    console.log('not', notificacion);
    console.log('not cont', notificacion.contenido);
}


module.exports = {
    generarNotificacion
}