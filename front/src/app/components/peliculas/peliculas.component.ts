import { Component, OnInit } from '@angular/core';
import { PeliculasService } from "../../services/peliculas.service";
import { Pelicula } from "../../modelo/pelicula";

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  public peliculaInfo: Pelicula;
  public peliculas: Array<Pelicula>;
  public ruta: String;
  public detallesPelicula = false;
  public peliParams = {detalles: false, pelicula: new Pelicula('', '',' ', 0, '', '', '', 'activo', [], '')}
  public filterPost = '';


  /* public estado = false */
  ;

  constructor(private peliculasService: PeliculasService) {
    this.ruta = peliculasService.url;
    this.peliculaInfo = new Pelicula('', '',' ', 0, '', '', '', 'activo', [], '');
   }

  ngOnInit(): void {
    this.gsapAnimationsPeliculas();
  }

  /*
    --------------------------------------------------- GSAP Animations ---------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------------------------------  
  */

  gsapAnimationsPeliculas() {

    
    // Función para volver al inicio de la página
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

    this.listarPeliculas()

    if (JSON.parse(localStorage.getItem('peliParams')) && JSON.parse(localStorage.getItem('peliParams')).detalles === true) {
      this.detallesPelicula = JSON.parse(localStorage.getItem('peliParams')).detalles;
      this.peliculaInfo = JSON.parse(localStorage.getItem('peliParams')).pelicula;
    }else{
      localStorage.setItem("peliParams", JSON.stringify(this.peliParams))
    }
  }

  listarPeliculas(){
    this.peliculasService.obtenerPeliculas().subscribe(
      (response: any) => {
        this.peliculas = response.peliculas;
        if (!this.peliculas) {
          alert("Lo sentimos, no hay peliculas disponibles")
        }
      },
      (error) => {
        let errorMsg = <any>error;
        if (errorMsg != null) {
          console.log(errorMsg)
        }
      }
    );
  }

  peliIndividual(pelicula: Pelicula){
    this.peliculaInfo = pelicula;
    this.peliParams.detalles = true;
    this.detallesPelicula = true;
    this.peliParams.pelicula = pelicula;

    localStorage.setItem("peliParams", JSON.stringify(this.peliParams));
  }

  listaPeliculas(){
    this.peliParams.detalles = false;
    this.detallesPelicula = false;
    localStorage.setItem("peliParams", JSON.stringify(this.peliParams));
  }

}
