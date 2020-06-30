import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Chat } from '../modelo/chat'

@Injectable()
export class ChatService {
  url = 'http://localhost:3000/api/';

  constructor(private _http: HttpClient) { }

  generarChat(msgUser : Chat){
    let reqBody = JSON.stringify(msgUser);
    let reqOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' }),
    };
    return this._http
      .post(this.url + `chat/`, reqBody, reqOptions)
      .pipe(map((res) => res));
  }


  
}
