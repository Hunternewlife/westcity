import { Injectable } from '@angular/core';

import { NotificacionCorreo } from '../modelo/notificacionCorreo'

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailNotificationService {
  url = 'http://localhost:3000/api/';

  constructor(private _http : HttpClient) { }

  elaborarMensaje(titulo,tipo,parametros){
    let notificacionCorreo = new NotificacionCorreo('','',[])

    switch (tipo) {
      case 'registro':
            notificacionCorreo.titulo=titulo;
            notificacionCorreo.tipo=tipo;
            notificacionCorreo.contenido = [{correoRcpt:`${parametros.correo}`},{subject:"Confirmación de Registro en West City"},{content: parametros}];
            //
        break;
      case 'tiquetes':

        break;

      case 'comidas': 

        break;
    
      default:
        break;
    }

    return notificacionCorreo;

  }

  generarNotificacion(mensajeNotificacion){
    let params = JSON.stringify(mensajeNotificacion);
    let options = {
      headers: new HttpHeaders( { 'content-type':'application/json' } )
    }
    return this._http.post(
      this.url + 'notificacion-email',
      params,
      options
    ).pipe(map( res => res ))

  }
}
