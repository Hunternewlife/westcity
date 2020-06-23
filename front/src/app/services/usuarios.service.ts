import { Injectable } from '@angular/core';

/* importar modulos encqargados de las peticiones http */
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { observable } from "rxjs";

@Injectable()

export class UsuariosService {

  url = 'http://localhost:3000/api/usuario/';

  public identidad

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
  logIn(usuarioLogueado){
    let params = JSON.stringify(usuarioLogueado);
    let options = {
      headers: new HttpHeaders( { 'content-type' : 'application/json' } )
      }
    
    return this._http.post(
      this.url + 'login',
      params,
      options
    ).pipe(map(res => res));
  }

  obtenerUsuario(){
    let usuarioAutorizado = JSON.parse(localStorage.getItem('sesion'));

    if (usuarioAutorizado != 'undefined') {
      this.identidad = usuarioAutorizado;
    }else{
      this.identidad = null;
    }
    return this.identidad;
  }

  isLogged(){
    return JSON.parse(localStorage.getItem('logged')).logged;
}

  cerrarSesion(){
    localStorage.removeItem('sesion');
    localStorage.setItem('logged',JSON.stringify({logged:false}));
  }

  getRol(){
    
    return JSON.parse(localStorage.getItem('sesion')).rol;
  }

}


