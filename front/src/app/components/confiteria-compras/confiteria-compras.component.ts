import { Component, OnInit } from '@angular/core';

// Traer modelo de productos
import { Producto } from '../../modelo/producto';

// Traer servicio de productos quemados
import { ProductosService } from '../../services/productos.service';

// Traer servicio de carrito de compra
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-confiteria-compras',
  templateUrl: './confiteria-compras.component.html',
  styleUrls: ['./confiteria-compras.component.scss']
})
export class ConfiteriaComprasComponent implements OnInit {

  // Aqui se almacenaran los productos del servicio
  productos: Array<Producto>;
  // Auxiliares para segregar entre combos y confiteria
  combos: Array<Producto>;
  confiteria: Array<Producto>;

  constructor(
    // Inyectar servicio de productos quemados
    private productosService: ProductosService,
    // Inyectar servicio de carrito de compra
    private carritoService: CarritoService
  ) { }

  ngOnInit(): void {
    // Consumir servicio para obtener los productos quemados
    // (Notese que el metodo no es asincrono)
    this.productos = this.productosService.getProductos();

    // Segregar entre combos y comidas
    this.combos = this.productos.filter(
      (producto) => producto.tipo === 'combo');

    this.confiteria = this.productos.filter(
      (producto) => producto.tipo === 'confiteria');
  }

  // Metodo para agregar productos al carrito
  agregarACarrito(producto: Producto) {
    // Agregar producto al carrito de compra
    this.carritoService.agregarCarrito(producto);

    // Alerta de compra
    alert(`Producto "${producto.nombre}" agregado al carrito!`);
  }

}
