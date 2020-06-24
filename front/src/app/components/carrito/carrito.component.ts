import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CarritoService } from '../../services/carrito.service';

import { Producto } from '../../modelo/producto'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  public carrito: Array<Producto> = [];
  public subscription: Subscription;
  public total: number;

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {

    this.carritoService.obtenerCarrito().subscribe(data => {
      console.log(data);
      this.carrito = data;
      this.total = this.carritoService.obtenerTotal();
    },
      error => alert(error));
  }

  agregarCarrito(producto){
    console.log(producto)
    this.carritoService.agregarCarrito(producto)
  }

  

}
