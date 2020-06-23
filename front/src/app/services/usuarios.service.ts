import { Injectable } from '@angular/core';

/* importar modulos encqargados de las peticiones http */
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { observable } from "rxjs";

@Injectable()

export class UsuariosService {

  url = 'http://localhost:3000/api/';

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

// servicio para modificar usuario
  modificarUsuario(usuarioModificado) {
    let { _id } = usuarioModificado;
    let reqBody = JSON.stringify(usuarioModificado);
    let reqOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this._http.put(
      this.url + `actualizar/${_id}`,
      reqBody,
      reqOptions
    ).pipe(map(res => res));
  }

  // servicio para subir (o modificar) imagen de usuario
  subirImagenUsuario(_id, archivoImagen: File) {
    let formData = new FormData();
    formData.append('imagen', archivoImagen);
    return this._http.put(
      this.url + `subir-img/${_id}`,
      formData
    ).pipe(map(res=>res));
  }

}
