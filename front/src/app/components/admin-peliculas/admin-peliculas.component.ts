import { Component, OnInit } from '@angular/core';

// Servicio de peliculas
import { PeliculasService } from '../../services/peliculas.service';

// Modelo de peliculas
import { Pelicula } from '../../modelo/pelicula';

@Component({
  selector: 'app-admin-peliculas',
  templateUrl: './admin-peliculas.component.html',
  styleUrls: ['./admin-peliculas.component.scss'],
})
export class AdminPeliculasComponent implements OnInit {
  filterPeliculas = '';

  // Se obtienen al consumir el servicio de peliculas
  peliculas: Array<Pelicula>;

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  // Auxiliar para cargar las peliculas utilizando el servicio
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
}
