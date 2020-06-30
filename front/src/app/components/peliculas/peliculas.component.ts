import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  public detallesPelicula = false;

  constructor() { }

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

  }

}
