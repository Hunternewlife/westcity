import { Injectable } from '@angular/core';

/* importar modulos encqargados de las peticiones http */
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { observable } from "rxjs";

@Injectable()

export class UsuariosService {

  url = 'http://localhost:3000/api/usuario/';

  constructor(
    private _http: HttpClient
  ) { }

  //servicio registrar usuario
  registro(usuarioNuevo){
    let params = JSON.stringify(usuarioNuevo);
    let options = {
      headers: new HttpHeaders( { 'content-type' : 'application/json' } )
      }
    
    return this._http.post(
      this.url + 'registro',
      params,
      options
    ).pipe(map(res => res));
  };


}
