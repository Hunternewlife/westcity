import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CarritoService } from '../../services/carrito.service';
import { UsuariosService } from '../../services/usuarios.service';
import { EmailNotificationService } from '../../services/email-notification.service'

import { Producto } from '../../modelo/producto'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  public resFlag = false;
  public identidad;
  public msgCompra : Array<any> = [];
  public msgEmail;
  public showCarrito : Array<any> =[]
  public carrito: Array<Producto> = [];
  public subscription: Subscription;
  public total: number;

  constructor(private carritoService: CarritoService, private usuariosService : UsuariosService, private emailNotificationService: EmailNotificationService  ) {
    this.showCarrito = [[],[]]
    this.identidad = this.usuariosService.obtenerUsuario();
   }

  ngOnInit(): void {

    this.carritoService.obtenerCarrito().subscribe(data => {
      //console.log(this.showCarrito[0]);
      this.carrito = data;
      if(this.carrito.length>0){
        this.cantidadesCarrito(this.showCarrito[1],this.carrito[this.carrito.length-1])
      }           
      this.total = this.carritoService.obtenerTotal();
    },
      error => alert(error));
  }

  cantidadesCarrito(listaCarrito, productoCarrito){
    if (listaCarrito.find(product => product._id === productoCarrito._id)===undefined) {

      listaCarrito.push(productoCarrito);
      this.showCarrito[0].push(1);      
      //console.log('La nueva colección es: ' + listaCarrito);
      //console.log(this.showCarrito[0])

    } else if(!this.resFlag) {
      let index =listaCarrito.findIndex(product => product._id === productoCarrito._id);
      this.showCarrito[0][index]=this.showCarrito[0][index]+1;
      
      
  }
  }

  unidadesBtnCarrito(item, i, accion){
    //console.log(`${item} ${i} ${accion}`)
    switch (accion) {
      case 'sum':
        this.carritoService.agregarCarrito(item)
        console.log('boton suma',this.carrito)
        //console.log(`sum show | ${this.showCarrito} | ${this.carrito}`)
        break;
      case 'res':
        this.resFlag=true;
        if(this.showCarrito[0][i]<=1){
          console.log('se puede eliminar')
          this.resFlag=false;
        }else{
          //console.log( this.showCarrito[0][i])
          this.showCarrito[0][i]= this.showCarrito[0][i]-1;
          this.carritoService.eliminarUnidad(item);
          this.resFlag=false;
          console.log('boton resta',this.carrito)
         /*  console.log(`res show | ${this.showCarrito} | ${this.carrito}`)
          console.log('menos una unidad') */
        }

        break;

      case 'eli':
        this.resFlag=true;
        //console.log('before',this.showCarrito[0])
        this.showCarrito[0].splice(i,1);
       this.showCarrito[1].splice(i,1);
        this.carritoService.eliminarItem(item);
       // console.log('after',this.showCarrito[0])
        this.resFlag=false;
        //console.log('boton x',this.carrito)

        break;
    
      default:
        break;
    }
    
  }

  PagarCarrito(){
    if(this.showCarrito[1].length>0){
      this.msgCompra=[this.identidad,this.showCarrito,this.carrito.length];
    console.log('mensaje',this.msgCompra)
    this.msgEmail=this.emailNotificationService.elaborarMensaje('Compra exitosa West City','compra',this.msgCompra)

    this.emailNotificationService.generarNotificacion(this.msgEmail).subscribe(
      (response : any) => {
        switch (response.message) {
           case 'Envio de correo satisfactorio':
             console.log('Correo enviado')

             break;

           case 'Error al enviar correo':
             console.log('Correo No enviado')

             break;

          default:
            break;
        }
      }


     )

    }else{
      alert('Tu carrito se encuentra vacio')
    }
    
  }

  vaciarCarrito(){
    this.carritoService.vaciarCarrito();
    this.showCarrito=[[],[]]
  }

  agregarCarrito(producto){
    this.carritoService.agregarCarrito(producto)
  }

  

}
