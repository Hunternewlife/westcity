import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
}
