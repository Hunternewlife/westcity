import { Component, OnInit } from '@angular/core';
import { PeliculasService } from "../../services/peliculas.service";
import { Pelicula } from "../../modelo/pelicula";
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  public peliculaInfo: Pelicula;
  public peliculas: Array<Pelicula>;
  public spaghetti: Array<Pelicula>;
  public clasicas: Array<Pelicula>;
  public culto: Array<Pelicula>;
  public contemporaneas: Array<Pelicula>;
  public ruta: String;
  public detallesPelicula = false;
  public peliParams = {detalles: false, pelicula: new Pelicula('', '',' ', 0, '', '', '', 'activo', [], '')}
  public filterPost = '';


  /* public estado = false */
  ;

  constructor(
    private peliculasService: PeliculasService,
    private sanitizer: DomSanitizer
    ) {
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

    console.log(this.peliculas)
    
  }

  listarPeliculas(){
    this.peliculasService.obtenerPeliculas().subscribe(
      (response: any) => {
        this.peliculas = response.peliculas;
        if (!this.peliculas) {
          alert("Lo sentimos, no hay peliculas disponibles")
        }else{
          this.culto = this.peliculas.filter(
            (pelicula: Pelicula) => pelicula.genero === "Culto"
          );
      
          this.spaghetti = this.peliculas.filter(
            (pelicula: Pelicula) => pelicula.genero === "Spaghetti Western"
          );
      
          this.clasicas = this.peliculas.filter(
            (pelicula: Pelicula) => pelicula.genero === "Clásicas"
          );
          
          this.contemporaneas = this.peliculas.filter(
            (pelicula: Pelicula) => pelicula.genero === "Contemporaneas"
          );
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
    this.peliParams.pelicula = pelicula;
    localStorage.setItem("peliParams", JSON.stringify(this.peliParams));
    this.detallesPelicula = true;
  }


  listaPeliculas(){
    this.peliParams.detalles = false;
    this.detallesPelicula = false;
    localStorage.setItem("peliParams", JSON.stringify(this.peliParams));
  }

  movieURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.peliculaInfo.enlacePelicula);
  }

  //clasificar por categorias

}
