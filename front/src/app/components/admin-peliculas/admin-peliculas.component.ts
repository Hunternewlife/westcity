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

  // Cambiar el estado de una pelicula
  cambiarEstado(pelicula: Pelicula) {
    if (pelicula.estado === 'activo') pelicula.estado = 'inactivo';
    else pelicula.estado = 'activo';

    // Hacer uso de la funcion generica de actualizacion
    this.actualizarPelicula(pelicula);
  }

  // Actualizar pelicula (genericamente)
  actualizarPelicula(peliculaModificada: Pelicula) {
    this.peliculasService.actualizarPelicula(peliculaModificada).subscribe(
      (response: any) => {
        if (!response.pelicula)
          alert('No se ha podido actualizar la pelicula!');
        // Repoblar con datos actualizados
        alert('Pelicula actualizada correctamente!');
        this.obtenerPeliculas();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Eliminar pelicula
  borrarPelicula(peliculaABorrar: Pelicula) {
    const { _id } = peliculaABorrar;
    this.peliculasService.borrarPelicula(_id).subscribe(
      (response: any) => {
        if (!response.pelicula)
          alert('No se ha podido eliminar la pelicula!');
        // Repoblar con datos actualizados
        alert('Pelicula eliminada correctamente!');
        this.obtenerPeliculas();
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
