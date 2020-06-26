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
    //console.log(req.body)
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
                    notificacion=null;
                    res.status(200).send({
                        message: 'Envio de correo satisfactorio'
                    })
                }
            })

            
            break;
        case 'compra':
            // mezclar arrays que vienen en  req.body.contenido en uno solo para la plantilla de vista  ||| Posible mejora para recibir el arreglo hecho desde el front
            let pedido = [{ }]
            //console.log('cantidades',notificacion.contenido[2].content)
            notificacion.contenido[2].content[0].forEach((pedidoArray,index) => {
                pedido[index] = {
                    cantidad : pedidoArray,
                    _id : notificacion.contenido[2].content[1][index]._id,
                    nombre : notificacion.contenido[2].content[1][index].nombre,
                    descripcion : notificacion.contenido[2].content[1][index].descripcion,
                    precio : notificacion.contenido[2].content[1][index].precio,
                    tipo : notificacion.contenido[2].content[1][index].tipo

                }
                //console.log(`pedido ${index} = ${pedido}`)
            });
            console.log('items pedidos', pedido)

            // Configuracion Mensaje
            mailOptions.from = 'westcitymovies@gmail.com';
            mailOptions.to = `${notificacion.contenido[0].correoRcpt}`;
            mailOptions.subject = `${notificacion.titulo}`;
            mailOptions.template= 'compraWestCity';
            mailOptions.context = {
                titulo :notificacion.contenido[1].subject,
                items : pedido

            }
            //Enviar mensaje
            transporter.sendMail(mailOptions, (err, info)=>{
                if(err){
                    res.status(200).send({
                        message: 'Error al enviar correo'
                    })
                    console.log('Error', err);
                }else{
                    notificacion=null;
                    res.status(200).send({
                        message: 'Envio de correo satisfactorio'
                    })
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