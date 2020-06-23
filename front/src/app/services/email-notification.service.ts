import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailNotificationService {
  url = 'http://localhost:3000/api/';

  constructor(private _http : HttpClient) { }

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
