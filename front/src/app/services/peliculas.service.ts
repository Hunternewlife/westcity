import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Pelicula } from '../modelo/pelicula';

@Injectable()
export class PeliculasService {
  // url de la api
  url: string = 'http://localhost:3000/api/';

  // Inyectar cliente http
  constructor(private _http: HttpClient) {}

  // Servicio para obtener todas las peliculas
  obtenerPeliculas() {
    return this._http
      .get(this.url + 'obtener-peliculas')
      .pipe(map((res) => res));
  }

  // Servicio para actualizar una pelicula
  actualizarPelicula(peliculaModificada: Pelicula) {
    const { _id } = peliculaModificada;
    const reqBody = JSON.stringify(peliculaModificada);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this._http
      .put(this.url + `actualizar-pelicula/${_id}`, reqBody, options)
      .pipe(map((res) => res));
  }

  // Servicio para borrar una pelicula
  borrarPelicula(id: string) {
    return this._http
      .delete(this.url + `borrar-pelicula/${id}`)
      .pipe(map((res) => res));
  }
}
