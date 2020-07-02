import { Component, OnInit } from '@angular/core';

// Traer modelo de productos
import { Producto } from '../../modelo/producto';

// Traer modelo de usuarios
import { Usuario } from '../../modelo/usuario';

// Traer servicio de productos quemados
import { ProductosService } from '../../services/productos.service';

// Traer servicio de carrito de compra
import { CarritoService } from '../../services/carrito.service';

// Traer servicio de usuarios
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-confiteria-compras',
  templateUrl: './confiteria-compras.component.html',
  styleUrls: ['./confiteria-compras.component.scss'],
})
export class ConfiteriaComprasComponent implements OnInit {
  // Aqui se almacenaran los productos del servicio
  productos: Array<Producto>;
  // Auxiliares para segregar entre combos y confiteria
  combos: Array<Producto>;
  confiteria: Array<Producto>;

  // Usuario actual
  usuario: Usuario;

  constructor(
    // Inyectar servicio de productos quemados
    private productosService: ProductosService,
    // Inyectar servicio de carrito de compra
    private carritoService: CarritoService,
    // Inyectar servicio de usuarios
    private usuariosService: UsuariosService
  ) {}

  ngOnInit(): void {
    // Obtener usuario actual a traves del servicio
    this.usuario = this.usuariosService.obtenerUsuario();

    // Consumir servicio para obtener los productos quemados
    // (Notese que el metodo no es asincrono)
    let productosPre = this.productosService.getProductos();

    if (this.usuariosService.isLogged()) {
      // Preprocesar aplicando descuento
      if (this.usuario.suscripcion === 'sheriff')
      this.productos = productosPre.map((producto) => {
        producto.precio = producto.precio * 0.5;
        return producto;
      });
      else if (this.usuario.suscripcion === 'pistolero')
      this.productos = productosPre.map((producto) => {
        producto.precio = producto.precio * 0.75;
        return producto;
      });
    } else {
      this.productos = productosPre;
    }

    // Segregar entre combos y comidas
    this.combos = this.productos.filter(
      (producto) => producto.tipo === 'combo'
    );

    this.confiteria = this.productos.filter(
      (producto) => producto.tipo === 'confiteria'
    );
  }

  // Metodo para agregar productos al carrito
  agregarACarrito(producto: Producto) {
    if (this.usuariosService.isLogged()) {
      // Agregar producto al carrito de compra
      this.carritoService.agregarCarrito(producto);

      // Alerta de compra
      alert(`Producto "${producto.nombre}" agregado al carrito!`);
    } else {
      alert('Usted debe iniciar sesion para hacer compras');
    }
  }
}
