const Notificacion = require('../modelo/notificacionCorreo');
const nodemailer = require("nodemailer");
const path = require('path');
/* 
    Se recibira una peticion que vendrá de la siguiente forma
    {
	"titulo" : "",
	"tipo" :"",
    "contenido" : [{"correoRcpt":""},{"subject":""},{"content":""}]

    en donde, titulo, será el asunto del correo, 
              tipo, será el tipo de mensaje a enviar,
              contenido, este será un arreglo que en su primer posición traerá el correo del destinatario en el parametro 'correoRcpt'
                         en la segunda posición tendrá el titulo del cuerpo del mensaje, y en su tercera posición traera un arreglo con el contenido 
                         del mensaje, la información de esta posición cambiará de acuerdo al tipo de mensaje que se quiere enviar    
  
}
*/

function generarNotificacion(req,res){
    let hbs = require('nodemailer-express-handlebars');
    let options = {
        viewEngine : {
            extname: '.hbs', // handlebars extension
            defaultLayout: '',
            layoutsDir: path.join(__dirname,'../views/templates/') , 
            partialsDir: path.join(__dirname,'../views/templates/'), 
        },
        viewPath: path.join(__dirname,'../views/templates/'),
        extName: '.hbs'
        };

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'westcitymovies@gmail.com',
            pass: 'West123city'
        }
    });
    transporter.use('compile', hbs(options));

    const mailOptions={}
    let notificacion = new Notificacion();

    notificacion.titulo = req.body.titulo;
    notificacion.tipo = req.body.tipo;
    notificacion.contenido = req.body.contenido;
    console.log(notificacion)
    // logica para realizar el mensaje que se enviará por correo
    switch (notificacion.tipo) {
        case 'registro':
            // Configuracion Mensaje
            mailOptions.from = 'westcitymovies@gmail.com';
            mailOptions.to = `${notificacion.contenido[0].correoRcpt}`;
            mailOptions.subject = `${notificacion.titulo}`;
            mailOptions.template= 'registro';
            mailOptions.context = {
                titulo :notificacion.contenido[1].subject,
                usuario: notificacion.contenido[2].content

            }
            console.log(mailOptions)
            //Enviar mensaje
            transporter.sendMail(mailOptions, (err, info)=>{
                if(err){
                    res.status(200).send({
                        message: 'Error al enviar correo'
                    })
                    console.log('Error', err);
                }else{
                    res.status(200).send({
                        message: 'Envio de correo satisfactorio'
                    })
                }
            })

            
            break;
        case 'compra':
            // Configuracion Mensaje
            mailOptions.from = 'westcitymovies@gmail.com';
            mailOptions.to = `${notificacion.contenido[0].correoRcpt}`;
            mailOptions.subject = `${notificacion.titulo}`;
            mailOptions.template= 'tiquetes';
            mailOptions.context = {
                //titulo :notificacion.contenido[1].subject

            }
            console.log(mailOptions)
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

}


module.exports = {
    generarNotificacion
}