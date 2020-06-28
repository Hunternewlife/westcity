import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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

  // Almacenara una nueva pelicula (binding al formulario correspondiente)
  nuevaPelicula: Pelicula;

  // Almacena nuevo archivo de imagen
  nuevaImagen: File;

  // Util para limpiar el input para la nueva imagen
  @ViewChild('nuevaImg')
  nuevaImgVar: ElementRef;

  // Auxiliar para actores
  nuevaPeliculaAux;

  peliculaEditar: Pelicula;

  imagenEditar: File;

  @ViewChild('editarImg')
  editarImgVar: ElementRef;

  peliculaEditarAux;

  constructor(private peliculasService: PeliculasService) {
    this.nuevaPelicula = new Pelicula(
      '',
      '',
      '',
      0,
      '',
      '',
      '',
      'activo',
      [],
      ''
    );
    this.nuevaPeliculaAux = {
      nuevoActor: '',
      actorBorrar: this.nuevaPelicula.actores[0],
    };
    this.peliculaEditar = null;
    this.peliculaEditarAux = null;
  }

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
        if (!response.pelicula) alert('No se ha podido eliminar la pelicula!');
        // Repoblar con datos actualizados
        alert('Pelicula eliminada correctamente!');
        this.obtenerPeliculas();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Auxiliares para formulario de nueva pelicula
  agregarActor() {
    this.nuevaPelicula.actores.push(this.nuevaPeliculaAux.nuevoActor);
    this.nuevaPeliculaAux.nuevoActor = '';
  }

  eliminarActor() {
    const posBorrar = this.nuevaPelicula.actores.indexOf(
      this.nuevaPeliculaAux.actorBorrar
    );
    this.nuevaPelicula.actores.splice(posBorrar, 1);
    this.nuevaPeliculaAux.actorBorrar = this.nuevaPelicula.actores[0];
  }

  // Prepara el archivo de imagen a subir (nueva pelicula)
  prepararArchivoNuevo(event) {
    this.nuevaImagen = <File>event.target.files[0];
  }

  // Sube un poster para una determinada pelicula
  subirPoster(id: string, poster: File) {
    this.peliculasService.subirPoster(id, poster).subscribe(
      (response: any) => {
        if (!response.pelicula) alert('No se ha podido subir la imagen!');
        // Repoblar con datos actualizados
        alert('Imagen subida correctamente!');
        this.obtenerPeliculas();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  agregarPelicula() {
    this.peliculasService.agregarPelicula(this.nuevaPelicula).subscribe(
      (response: any) => {
        if (!response.pelicula)
          return alert('No se ha podido agregar la pelicula!');
        alert('Pelicula agregada correctamente!');

        // Subir poster (de haberlo)
        if (this.nuevaImagen) {
          this.subirPoster(response.pelicula._id, this.nuevaImagen);

          // Limpiar el input
          this.nuevaImagen = null;
          this.nuevaImgVar.nativeElement.value = '';
        }
        // Repoblar con datos actualizados (es necesario aqui tambien)
        else this.obtenerPeliculas();

        // Limpiar estado de nueva pelicula
        this.nuevaPelicula = new Pelicula(
          '',
          '',
          '',
          0,
          '',
          '',
          '',
          'activo',
          [],
          ''
        );
        this.nuevaPeliculaAux = {
          nuevoActor: '',
          actorBorrar: this.nuevaPelicula.actores[0],
        };
      },
      (error) => {
        console.log(error);
      }
    );
  }

  eliminarActorEditar() {
    const posBorrar = this.peliculaEditar.actores.indexOf(
      this.peliculaEditarAux.actorBorrar
    );
    this.peliculaEditar.actores.splice(posBorrar, 1);
    this.peliculaEditarAux.actorBorrar = this.nuevaPelicula.actores[0];
  }

  agregarActorEditar() {
    this.peliculaEditar.actores.push(this.peliculaEditarAux.nuevoActor);
    this.peliculaEditarAux.nuevoActor = '';
  }

  prepararArchivoEditar(event) {
    this.imagenEditar = <File>event.target.files[0];
  }

  editarPelicula() {}

  setPeliculaEditar(pelicula: Pelicula) {
    this.peliculaEditar = pelicula;
    this.peliculaEditarAux = {
      nuevoActor: '',
      actorBorrar: this.peliculaEditar.actores[0],
    };
  }
}
