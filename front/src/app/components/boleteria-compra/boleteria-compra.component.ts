import { Component, OnInit } from '@angular/core';
// Servicio de peliculas
import { PeliculasService } from '../../services/peliculas.service';

// Modelo de peliculas
import { Pelicula } from '../../modelo/pelicula';

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

  public ruta : string;
  peliculas: Array<Pelicula>;
  constructor(private peliculasService: PeliculasService) {
    this.horarios = ['2:00pm','4:00pm','6:00pm','8:00pm'];
    this.tiquetes = [1,2,3,4]
    this.ruta=this.peliculasService.url;
  }

  ngOnInit(): void {
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

  capturar(i) {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.horSeleccion = this.horarioSeleccionado[i];
    this.tiqSeleccion = this.tiquetesSeleccionado[i];
}
agregarTiquete(pelicula : Pelicula,i:number){
  if(this.tiquetesSeleccionado[i] === undefined || this.horarioSeleccionado[i] === undefined){
    alert('Por favor elige un horario y las cantidades de tiquetes que deseas comprar')
  }else{
    console.log(pelicula)
  }
  
}
}
