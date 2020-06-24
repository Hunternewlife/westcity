import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CarritoService } from '../../services/carrito.service';
import { UsuariosService } from '../../services/usuarios.service'

import { Producto } from '../../modelo/producto'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  public showCarrito : Array<any> =[]
  public carrito: Array<Producto> = [];
  public subscription: Subscription;
  public total: number;

  constructor(private carritoService: CarritoService) {
    this.showCarrito = [[],[]]
   }

  ngOnInit(): void {

    this.carritoService.obtenerCarrito().subscribe(data => {
      //console.log(data);
      this.carrito = data;
      if(this.carrito.length>0){
        this.cantidadesCarrito(this.showCarrito[1],this.carrito[this.carrito.length-1])
      }           
      this.total = this.carritoService.obtenerTotal();
    },
      error => alert(error));
  }

  cantidadesCarrito(listaCarrito, productoCarrito){
    console.log(listaCarrito.find(product => product._id === productoCarrito._id))
    if (listaCarrito.find(product => product._id === productoCarrito._id)===undefined) {

      listaCarrito.push(productoCarrito);
      this.showCarrito[0].push(1);      
      console.log('La nueva colección es: ' + listaCarrito);
      console.log(this.showCarrito[0])

    } else {
      let index =listaCarrito.findIndex(product => product._id === productoCarrito._id);
      this.showCarrito[0][index]=this.showCarrito[0][index]+1;
      console.log(this.showCarrito[0])
      
      
  }
  }
  PagarCarrito(){

  }

  agregarCarrito(producto){
    this.carritoService.agregarCarrito(producto)
  }

  

}
