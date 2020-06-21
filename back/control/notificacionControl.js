const Notificacion = require('../modelo/notificacionCorreo');
const nodemailer = require("nodemailer");

function generarNotificacion(req,res){
    let hbs = require('nodemailer-express-handlebars');

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'westcitymovies@gmail.com',
            pass: 'West123city'
        }
    });
    transporter.use('compile',hbs({
        viewEngine: 'express-handlebars',
        viewPath: '../views/templates/'
    }));

    const mailOptions={}
    let notificacion = new Notificacion();

    notificacion.titulo = req.body.titulo;
    notificacion.tipo = req.body.tipo;
    notificacion.contenido = req.body.contenido;
    // logica para realizar el mensaje que se enviará por correo
    switch (notificacion.tipo) {
        case 'registro':
            // Configuracion Mensaje
            mailOptions.from = 'westcitymovies@gmail.com';
            mailOptions.to = `${notificacion.contenido[0].correoRcpt}`;
            mailOptions.subject = `${notificacion.contenido[1].subject}`;
            mailOptions.text= `${notificacion.contenido[2].content}`
            mailOptions.template= 'registro';
            //Enviar mensaje
            transporter.sendMail(mailOptions, (err, info)=>{
                if(err){
                    console.log('Error', err);
                }else{
                    console.log('Mensaje Enviado');
                }
            })

            
            break;
    
        default:
            break;
    }
    


    //logica para enviar por correo el mensaje realizado 
    

    console.log('not', notificacion);
    console.log('not cont', notificacion.contenido);
}


module.exports = {
    generarNotificacion
}