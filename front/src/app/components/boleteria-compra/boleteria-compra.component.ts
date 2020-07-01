import { Component, OnInit } from '@angular/core';
// Servicio de peliculas
import { PeliculasService } from '../../services/peliculas.service';
import { CarritoService } from '../../services/carrito.service';
import { UsuariosService } from '../../services/usuarios.service';

// Modelo de peliculas
import { Pelicula } from '../../modelo/pelicula';
import { Producto } from '../../modelo/producto';
import { Usuario } from '../../modelo/usuario';

@Component({
  selector: 'app-boleteria-compra',
  templateUrl: './boleteria-compra.component.html',
  styleUrls: ['./boleteria-compra.component.scss']
})
export class BoleteriaCompraComponent implements OnInit {

  public horarios;
  public horarioSeleccionado: string[]  = [];
  public horSeleccion: string        = '';

  public tiquetes;
  public tiquetesSeleccionado: number[]  = [];
  public tiqSeleccion: number        = 0;

  public productoTiquete : Producto
  public test;
  public ruta : string;
  public precioTiq: number = 20000;
  peliculas: Array<Pelicula>;

  usuario: Usuario;
  constructor(private peliculasService: PeliculasService, private carritoService: CarritoService,private usuariosService: UsuariosService) {
    this.horarios = ['2:00pm','4:00pm','6:00pm','8:00pm'];
    this.tiquetes = [1,2,3,4]
    this.ruta=this.peliculasService.url;
    this.productoTiquete = new Producto('','','',0,'')

  }

  ngOnInit(): void {
    this.cargaContenidoBoleteria();
  }

  cargaContenidoBoleteria(){
    this.usuario = this.usuariosService.obtenerUsuario();
    this.calcularPrecios();
    this.obtenerPeliculas();
  }

  obtenerPeliculas() {
    this.peliculasService.obtenerPeliculas().subscribe(
      (response: any) => {
        this.peliculas = response.peliculas;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  calcularPrecios(){
    if(this.usuario.suscripcion==='sheriff'){
      this.precioTiq=this.precioTiq*0.5
    }else if(this.usuario.suscripcion==='pistolero'){
      this.precioTiq=this.precioTiq*0.75

    }
  }

  capturar(i) {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.horSeleccion = this.horarioSeleccionado[i];
    this.tiqSeleccion = this.tiquetesSeleccionado[i];
}
agregarTiquete(pelicula : Pelicula,i:number){
  if(this.tiquetesSeleccionado[i] === undefined || this.horarioSeleccionado[i] === undefined){
    alert('Por favor elige un horario y las cantidades de tiquetes que deseas comprar')
  }else{
    //console.log(pelicula)
    for (let reps = 0; reps < this.tiquetesSeleccionado[i]; reps++) {
    this.productoTiquete._id=`p${i}`;
    this.productoTiquete.nombre=`Tiq ${pelicula.nombre}|${this.horarioSeleccionado[i]}`;
    this.productoTiquete.descripcion=`${this.tiquetesSeleccionado[i]} tiquetes  ${pelicula.nombre} ${this.horarioSeleccionado[i]}`;
    this.productoTiquete.tipo='tiquetes';
    this.productoTiquete.precio=this.precioTiq;
   // console.log('prod peli', this.productoTiquete)
   
    this.sendProducto(this.productoTiquete)
    this.productoTiquete = new Producto('','','',0,'')
   }
    
   
    
  }
  
}

sendProducto(prod : Producto){
  this.carritoService.agregarCarrito(prod);
}
}
